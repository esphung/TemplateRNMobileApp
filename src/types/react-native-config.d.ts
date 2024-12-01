declare module "react-native-config" {
	export interface NativeConfig {
		RN_NODE_ENV: string;
	}

	export const Config: NativeConfig;
	export default Config;
}
