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

export interface C_aboutSection {
	aboutHeading?: string,
	aboutDesc?: string,
	aboutImage?: Image,
	aboutImageHeading?: string,
	aboutImageDesc?: string,
	aboutImageNumber?: string[],
	aboutImageNumberDesc?: string[],
}

export interface C_banner {
	bannerImage?: Image,
	bannerHeading?: string,
	bannerDescription?: string,
}

export interface C_heroSection {
	heroImage?: Image,
	heroHead1?: string,
	heroHead2?: string,
	heroDesc?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface ArticleButton {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_topArticles {
	articleImage?: Image,
	articleHead?: string,
	articleDesc?: string,
	articleKeywords?: string[],
	articleButton?: ArticleButton,
}

export default interface Ce_blogs {
	c_bodyOption2: string;
	c_bodyOption1: string;
	c_bodyOption3: string;
	richTextDescription?: string,
	slug?: string,
	name: string,
	c_aboutSection?: C_aboutSection,
	c_banner?: C_banner,
	c_blogImage?: Image,
	c_heroSection?: C_heroSection,
	c_topArticles?: C_topArticles[],
	id: string,
}
