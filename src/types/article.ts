export enum C_brandedOrGeneric {
	BRANDED = "Branded",
	GENERIC = "Generic",
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

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

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export default interface Ce_article {
	landingPageUrl?: string,
	name: string,
	c_bodyOption1?: string,
	c_bodyOption2?: string,
	c_bodyOption3?: string,
	c_brand?: string[],
	c_brandedOrGeneric?: C_brandedOrGeneric,
	c_primaryCTA?: C_primaryCTA,
	c_primaryKeyword?: string[],
	c_relatedProducts?: EntityReference[],
	c_relatedRecipes?: EntityReference[],
	c_secondaryCTA?: C_secondaryCTA,
	c_secondaryKeyword?: string[],
	photoGallery?: ComplexImage[],
	keywords?: string[],
	id: string,
}
