"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_token_public_key = exports.refresh_token_private_key = exports.access_token_public_key = exports.access_token_private_key = void 0;
const crypto = require("node:crypto");
const path = require("node:path");
const fs = require("fs");
function checkExistFolder(name) {
    const check_path = path.join(__dirname, `../../${name}`);
    !fs.existsSync(check_path) && fs.mkdir(check_path, (err) => err);
}
function getAccessTokenKeyPair() {
    checkExistFolder('secure');
    const access_token_private_key_path = path.join(__dirname, '../../secure/access_token_private.key');
    const access_token_public_key_path = path.join(__dirname, '../../secure/access_token_public.key');
    const access_token_private_key_exists = fs.existsSync(access_token_private_key_path);
    const access_token_public_key_exists = fs.existsSync(access_token_public_key_path);
    if (!access_token_private_key_exists || !access_token_public_key_exists) {
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });
        fs.writeFileSync(access_token_private_key_path, privateKey);
        fs.writeFileSync(access_token_public_key_path, publicKey);
    }
    const access_token_private_key = fs.readFileSync(access_token_private_key_path, 'utf-8');
    const access_token_public_key = fs.readFileSync(access_token_public_key_path, 'utf-8');
    return {
        access_token_private_key,
        access_token_public_key,
    };
}
function getRefreshTokenKeyPair() {
    checkExistFolder('secure');
    const refresh_token_private_key_path = path.join(__dirname, '../../secure/refresh_token_private.key');
    const refresh_token_public_key_path = path.join(__dirname, '../../secure/refresh_token_public.key');
    const refresh_token_private_key_exists = fs.existsSync(refresh_token_private_key_path);
    const refresh_token_public_key_exists = fs.existsSync(refresh_token_public_key_path);
    if (!refresh_token_private_key_exists || !refresh_token_public_key_exists) {
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });
        fs.writeFileSync(refresh_token_private_key_path, privateKey);
        fs.writeFileSync(refresh_token_public_key_path, publicKey);
    }
    const refresh_token_private_key = fs.readFileSync(refresh_token_private_key_path, 'utf-8');
    const refresh_token_public_key = fs.readFileSync(refresh_token_public_key_path, 'utf-8');
    return {
        refresh_token_private_key,
        refresh_token_public_key,
    };
}
_a = getAccessTokenKeyPair(), exports.access_token_private_key = _a.access_token_private_key, exports.access_token_public_key = _a.access_token_public_key;
_b = getRefreshTokenKeyPair(), exports.refresh_token_private_key = _b.refresh_token_private_key, exports.refresh_token_public_key = _b.refresh_token_public_key;
//# sourceMappingURL=jwt.constraints.js.map