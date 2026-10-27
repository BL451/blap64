import { LitElement, html, css } from "lit";

const SUBSCRIBE_ENDPOINT =
    process.env.SUBSCRIBE_ENDPOINT ||
    "https://newsletter-subscribe.b-m-lappalainen.workers.dev";

const TURNSTILE_SITE_KEY =
    process.env.TURNSTILE_SITE_KEY || "0x4AAAAAACeFh_PLBS7wUUKA";

let turnstilePromise = null;

const loadTurnstile = () => {
    if (window.turnstile) return Promise.resolve(window.turnstile);

    if (!turnstilePromise) {
        turnstilePromise = new Promise((resolve, reject) => {
            const existing = document.querySelector("script[data-turnstile-api]");
            if (existing) {
                existing.addEventListener("load", () => resolve(window.turnstile), { once: true });
                existing.addEventListener("error", reject, { once: true });
                return;
            }

            const script = document.createElement("script");
            script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
            script.async = true;
            script.defer = true;
            script.dataset.turnstileApi = "true";
            script.addEventListener("load", () => resolve(window.turnstile), { once: true });
            script.addEventListener("error", reject, { once: true });
            document.head.appendChild(script);
        });
    }

    return turnstilePromise;
};

export class NewsletterForm extends LitElement {
    static properties = {
        status: { state: true },
        statusType: { state: true },
        loading: { state: true },
        hovered: { state: true },
        focused: { state: true },
    };

    static styles = css`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
            display: block;
            width: 400px;
            visibility: hidden;
            transform: translate3d(0, 0, 0);
            font-family: "BPdotsSquareVF", monospace;
            font-weight: 900;
            box-sizing: border-box;
            --blue: 74, 144, 230;
            --icon-size: 50px;
        }

        .card {
            position: relative;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: rgba(23, 23, 23, 0.196);
            border: 1px solid rgba(var(--blue), 0.31);
            transition: border-color 0.4s ease, background 0.4s ease;
        }

        .card::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 1px;
            background: rgba(var(--blue), 0.235);
            opacity: 0;
            pointer-events: none;
            animation: scan var(--scan-duration, 1300ms) linear infinite;
            transition: opacity 0.4s ease;
        }

        @keyframes scan {
            from { transform: translateY(0); }
            to { transform: translateY(calc(var(--card-height, 130px) - 3px)); }
        }

        .dots {
            position: absolute;
            top: 12.5px;
            right: 9px;
            width: 24px;
            height: 3px;
            background: radial-gradient(circle, rgba(var(--blue), 0.59) 1.5px, transparent 1.6px) 0 0 / 8px 3px repeat-x;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .icon {
            position: relative;
            flex: none;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: var(--icon-size);
            height: var(--icon-size);
            padding-left: 1px;
            border: 1px solid rgba(var(--blue), 0.31);
            background: rgba(23, 23, 23, 0.118);
            color: rgba(var(--blue), 0.47);
            font-size: 12px;
            font-weight: 600;
            font-variation-settings: "wght" 600;
            line-height: 1;
            transition: border-color 0.4s ease, background 0.4s ease, color 0.4s ease;
        }

        .icon::before,
        .icon::after {
            content: "";
            position: absolute;
            inset: -1px;
            background:
                linear-gradient(var(--bracket), var(--bracket)) top left / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top left / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top right / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) top right / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom left / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom left / 2px 10px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom right / 10px 2px no-repeat,
                linear-gradient(var(--bracket), var(--bracket)) bottom right / 2px 10px no-repeat;
            pointer-events: none;
        }

        .icon::before {
            --bracket: rgba(var(--blue), 0.376);
        }

        .icon::after {
            --bracket: rgba(var(--blue), 0.847);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .heading {
            display: flex;
            flex-direction: column;
            gap: 2.5px;
            min-width: 0;
        }

        .label {
            color: rgba(255, 255, 255, 0.63);
            font-size: 18px;
            line-height: 1;
            transition: color 0.4s ease;
        }

        .meta {
            color: rgba(150, 150, 150, 0.47);
            font-size: 13px;
            line-height: 1;
            transition: color 0.4s ease;
        }

        .card.active {
            border-color: rgba(var(--blue), 0.706);
            background: rgba(23, 23, 23, 0.353);
        }

        .card.active::after,
        .card.active .dots {
            opacity: 1;
        }

        .card.active .icon {
            border-color: rgba(var(--blue), 0.706);
            background: rgba(23, 23, 23, 0.275);
            color: rgb(var(--blue));
        }

        .card.active .icon::after {
            opacity: 1;
        }

        .card.active .label {
            color: #fff;
        }

        .card.active .meta {
            color: rgb(150, 150, 150);
        }

        .card.active,
        .card.active::after,
        .card.active .dots,
        .card.active .icon,
        .card.active .icon::after,
        .card.active .label,
        .card.active .meta {
            transition-duration: 0.2s;
        }

        form {
            display: flex;
            gap: 8px;
        }

        input {
            flex: 1;
            min-width: 0;
            height: 44px;
            padding: 0 12px;
            box-sizing: border-box;
            background: rgba(13, 13, 13, 0.8);
            border: 1px solid #404040;
            border-radius: 0;
            color: #fafafa;
            font-family: "ZxGamut", -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 16px;
            outline: none;
            transition: border-color 0.4s ease;
        }

        input::placeholder {
            color: #606060;
        }

        input:focus {
            border-color: rgb(var(--blue));
            transition-duration: 0.15s;
        }

        button {
            height: 44px;
            padding: 0 16px;
            background: rgba(23, 23, 23, 0.78);
            border: 2px solid rgb(var(--blue));
            border-radius: 0;
            color: rgb(230, 230, 230);
            font-family: "BPdotsSquareVF", monospace;
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.05em;
            cursor: pointer;
            white-space: nowrap;
            transition: background 0.4s ease, color 0.4s ease, opacity 0.2s ease;
        }

        button:disabled {
            opacity: 0.5;
            cursor: wait;
        }

        .status {
            min-height: 15px;
            font-size: 12px;
            line-height: 1.25;
            color: #808080;
        }

        .status:empty {
            display: none;
        }

        .status.success {
            color: rgb(var(--blue));
        }

        .status.error {
            color: #e25c4a;
        }

        .turnstile {
            position: absolute;
            right: 0;
            bottom: calc(100% + 6px);
            z-index: 2;
            display: flex;
            justify-content: flex-end;
        }

        .turnstile:empty {
            display: none;
        }

        @media (hover: hover) {
            button:hover:not(:disabled) {
                background: rgb(var(--blue));
                color: #fff;
                transition-duration: 0.15s;
            }
        }

        @media (max-width: 767px) {
            :host {
                --icon-size: 40px;
            }

            .icon {
                font-size: 10px;
            }

            button {
                padding: 0 12px;
            }
        }
    `;

    constructor() {
        super();
        this.status = "";
        this.statusType = "";
        this.loading = false;
        this.hovered = false;
        this.focused = false;
        this.token = "";
        this.widgetId = null;
        this.turnstileContainer = null;
    }

    firstUpdated() {
        this.turnstileContainer = this.renderRoot.querySelector(".turnstile");
        this.mountTurnstile();

        const card = this.renderRoot.querySelector(".card");
        this.resizeObserver = new ResizeObserver(() => {
            card.style.setProperty("--card-height", `${card.offsetHeight}px`);
            card.style.setProperty("--scan-duration", `${card.offsetHeight * 10}ms`);
        });
        this.resizeObserver.observe(card);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver?.disconnect();
        if (this.widgetId !== null && window.turnstile) {
            try {
                window.turnstile.remove(this.widgetId);
            } catch {
                this.widgetId = null;
            }
        }
        this.widgetId = null;
    }

    async mountTurnstile() {
        if (!this.turnstileContainer || !TURNSTILE_SITE_KEY) return;

        try {
            const turnstile = await loadTurnstile();
            if (!this.isConnected || !this.turnstileContainer) return;

            this.widgetId = turnstile.render(this.turnstileContainer, {
                sitekey: TURNSTILE_SITE_KEY,
                theme: "dark",
                size: "compact",
                appearance: "interaction-only",
                callback: (token) => {
                    this.token = token;
                },
                "expired-callback": () => {
                    this.token = "";
                },
                "error-callback": () => {
                    this.token = "";
                },
            });
        } catch {
            this.setStatus("Scanner offline. Refresh to reboot.", "error");
        }
    }

    setStatus(message, type = "") {
        this.status = message;
        this.statusType = type;
    }

    resetTurnstile() {
        this.token = "";
        if (this.widgetId !== null && window.turnstile) {
            try {
                window.turnstile.reset(this.widgetId);
            } catch {
                this.token = "";
            }
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.loading) return;

        const input = this.renderRoot.querySelector('input[type="email"]');
        const email = input.value.trim();

        if (!email) {
            this.setStatus("No address, no uplink.", "error");
            input.focus();
            return;
        }

        if (!this.token) {
            this.setStatus("Scanning: cyber or meat...");
            return;
        }

        this.loading = true;
        this.setStatus("");

        try {
            const response = await fetch(SUBSCRIBE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, token: this.token }),
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok) {
                const message = (data.message || "").toLowerCase();
                this.setStatus(
                    message.includes("already")
                        ? "Already jacked in."
                        : "Uplink established.",
                    "success"
                );
                input.value = "";
                this.resetTurnstile();
            } else {
                this.setStatus(data.error || "Uplink rejected. Try again.", "error");
                this.resetTurnstile();
            }
        } catch {
            this.setStatus("Signal lost. Try again in a bit.", "error");
        } finally {
            this.loading = false;
        }
    }

    render() {
        return html`
            <div
                class="card ${this.hovered || this.focused ? "active" : ""}"
                @pointerenter=${(e) => { if (e.pointerType === "mouse") this.hovered = true; }}
                @pointerleave=${() => { this.hovered = false; }}
                @focusin=${() => { this.focused = true; }}
                @focusout=${(e) => { if (!e.currentTarget.contains(e.relatedTarget)) this.focused = false; }}
            >
                <div class="dots"></div>
                <div class="header">
                    <div class="icon" aria-hidden="true">MAIL</div>
                    <div class="heading">
                        <span class="label">UPLINK</span>
                        <span class="meta">boot up, jack in</span>
                    </div>
                </div>
                <form @submit=${this.handleSubmit} aria-label="Newsletter signup">
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        autocomplete="email"
                        aria-label="Email address"
                        ?disabled=${this.loading}
                        required
                    >
                    <button type="submit" ?disabled=${this.loading}>
                        ${this.loading ? "SENDING..." : "SUBSCRIBE"}
                    </button>
                </form>
                <div
                    class="status ${this.statusType}"
                    role="status"
                    aria-live="polite"
                >${this.status}</div>
                <div class="turnstile"></div>
            </div>
        `;
    }
}

customElements.define("newsletter-form", NewsletterForm);
