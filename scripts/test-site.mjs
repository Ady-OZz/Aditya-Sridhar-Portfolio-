import fs from "node:fs/promises";
import path from "node:path";

const BASE_URL = "http://localhost:3000";
const RATE_LIMIT_WINDOW_MS = 31000;
const TERMS = [
    "Amit",
    "Chauhan",
    "BUMBAIYA",
    "amitchauhan",
    "xprilion",
    "Skima",
    "Hexaware",
    "Master Infotech",
];

const TEXT_EXTENSIONS = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".mjs",
    ".cjs",
    ".json",
    ".md",
    ".css",
    ".html",
    ".txt",
    ".svg",
    ".xml",
]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer() {
    for (let attempt = 1; attempt <= 30; attempt += 1) {
        try {
            const res = await fetch(BASE_URL, { method: "GET" });
            if (res.ok) {
                return true;
            }
        } catch {
            // ignore until retries exhausted
        }
        await sleep(1000);
    }
    return false;
}

async function postJson(url, body) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    let data = null;
    try {
        data = await res.json();
    } catch {
        data = null;
    }
    return { status: res.status, data };
}

async function runApiTests() {
    const results = [];
    const validBody = {
        name: "Test",
        email: "test@test.com",
        message: "hello",
    };

    await sleep(RATE_LIMIT_WINDOW_MS);

    const first = await postJson(`${BASE_URL}/api/sendmail`, validBody);
    results.push({
        name: "valid body (expect 200 or 500)",
        status: first.status,
        ok: first.status === 200 || first.status === 500,
    });

    const second = await postJson(`${BASE_URL}/api/sendmail`, validBody);
    results.push({
        name: "rate limit (expect 429)",
        status: second.status,
        ok: second.status === 429,
    });

    await sleep(RATE_LIMIT_WINDOW_MS);

    const missing = await postJson(`${BASE_URL}/api/sendmail`, {});
    results.push({
        name: "missing fields (expect 400)",
        status: missing.status,
        ok: missing.status === 400,
    });

    await sleep(RATE_LIMIT_WINDOW_MS);

    const invalid = await postJson(`${BASE_URL}/api/sendmail`, {
        name: "Test",
        email: "not-an-email",
        message: "hello",
    });
    results.push({
        name: "invalid email (expect 400)",
        status: invalid.status,
        ok: invalid.status === 400,
    });

    return results;
}

async function validateLinks() {
    const urls = [
        "https://github.com/Ady-OZz/Capstone-Project",
        "https://github.com/Ady-OZz/Student-Mngnt-SYS",
        "https://github.com/Ady-OZz/EWMS",
        "https://github.com/Ady-OZz/Expense-Tracker",
        "https://www.linkedin.com/in/aditya-sridhar-niet/",
    ];

    const results = [];
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    };
    for (const url of urls) {
        try {
            const headRes = await fetch(url, { method: "HEAD", headers });
            if (headRes.status === 200) {
                results.push({ url, status: headRes.status, ok: true });
                continue;
            }

            const getRes = await fetch(url, { method: "GET", headers });
            const isLinkedIn = url.includes("linkedin.com");
            const ok = isLinkedIn ? true : getRes.status === 200;
            results.push({
                url,
                status: headRes.status,
                followUpStatus: getRes.status,
                ok,
                manual: isLinkedIn,
            });
        } catch (error) {
            results.push({ url, status: "error", ok: false, error: String(error) });
        }
    }
    return results;
}

async function listFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await listFiles(fullPath)));
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (TEXT_EXTENSIONS.has(ext)) {
                files.push(fullPath);
            }
        }
    }
    return files;
}

async function scanStrings() {
    const targets = [
        path.join(process.cwd(), "src"),
        path.join(process.cwd(), "public"),
    ];

    const hits = [];
    for (const target of targets) {
        const files = await listFiles(target);
        for (const filePath of files) {
            const content = await fs.readFile(filePath, "utf8");
            const lines = content.split(/\r?\n/);
            lines.forEach((line, index) => {
                TERMS.forEach((term) => {
                    if (line.includes(term)) {
                        hits.push({
                            term,
                            filePath: path.relative(process.cwd(), filePath),
                            line: index + 1,
                            text: line.trim(),
                        });
                    }
                });
            });
        }
    }
    return hits;
}

function printResults(title, results, formatter) {
    console.log(`\n${title}`);
    results.forEach((result) => {
        console.log(`- ${formatter(result)}`);
    });
}

async function main() {
    const ready = await waitForServer();
    if (!ready) {
        console.error("Server did not start on http://localhost:3000");
        process.exit(1);
    }

    const apiResults = await runApiTests();
    printResults("API Tests", apiResults, (result) => {
        return `${result.name}: ${result.status} ${result.ok ? "OK" : "FAIL"}`;
    });

    const linkResults = await validateLinks();
    printResults("Link Validation", linkResults, (result) => {
        const followUp = result.followUpStatus ?
            ` (GET ${result.followUpStatus})` :
            "";
        const statusLabel = result.manual ? "MANUAL" : result.ok ? "OK" : "FAIL";
        return `${result.url}: ${result.status}${followUp} ${statusLabel}`;
    });

    const stringHits = await scanStrings();
    if (stringHits.length) {
        console.log("\nString Sweep (hits found)");
        stringHits.forEach((hit) => {
            console.log(
                `- ${hit.term} in ${hit.filePath}:${hit.line} -> ${hit.text}`,
            );
        });
    } else {
        console.log("\nString Sweep: no hits");
    }

    const failedApi = apiResults.filter((result) => !result.ok);
    const failedLinks = linkResults.filter((result) => !result.ok && !result.manual);

    if (failedApi.length || failedLinks.length || stringHits.length) {
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});