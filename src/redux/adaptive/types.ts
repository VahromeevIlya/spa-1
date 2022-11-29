export type AdaptiveStateType = {
	media: number;
	header?: string;
	toggleBurger?: boolean;
}
export enum Media {
	FULL = 1458 / 16,
	DESKTOP = 1457.98 / 16,
	TABLET = 991.98 / 16,
	MOBILE = 767.98 / 16,
	MOBILE_SMALL = 479.98 / 16,
}