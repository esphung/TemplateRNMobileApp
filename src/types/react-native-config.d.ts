declare module "react-native-config" {
	export interface NativeConfig {
		RN_NODE_ENV: string;
		RN_APP_ID: string;
	}

	export const Config: NativeConfig;
	export default Config;
}
