export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_articleCard {
	image?: Image,
	description?: string,
	cTA?: CTA,
}

export default interface Ce_articles {
	name: string,
	c_articleCard?: C_articleCard,
	id: string,
}
