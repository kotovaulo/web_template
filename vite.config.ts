import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

export default defineConfig({
	"plugins": [
		sveltekit()
	],
	"resolve": {
		"alias": {
			"@": resolve(__dirname, "src")
		}
	},
	"server": {
		"host": true,
		"port": 8000,
		"open": false,
		"watch": {
			"usePolling": true
		}
	},
	"test": {
		"include": [ "t/**/*.js" ]
	}
});
