// PROJECTS
export const allProjectsPaths = `*[_type == "caseStudy" && defined(asset->path) && asset->path match "/projects/" && isWebsitePublished == true]{asset->{path}}`;
export const getProject = `*[_type == "caseStudy" && asset->.slug.current == $slug && isWebsitePublished == true] | order(_updatedAt desc) {..., asset->{..., location->}, client->, pageBuilder[]{..., tags[]->,slides[]->{..., applications[]->, assets[]->, collections[]->, sectors[]->, designs[]->, specialties[]->, asset->}}}`;
export const getAllProjects = `*[_type == "caseStudy" && defined(asset->path) && asset->path match "/projects/" && isWebsitePublished == true] | order(orderRank) {..., asset->{..., applications[]->, designs[]->, collections[]->, specialties[]->, sectors[]-> ,featuredImage{...,asset->}}, featuredImage{...,asset->}}`;

// APPLICATIONS
export const getAllApplications = `*[_type == "asset" && defined(applications) && isWebsitePublished == true] | order(orderRank) {..., featuredImage{...,asset->}}`;
export const getAllApplicationTags = `*[_type == "application" && isWebsitePublished == true] | order(orderRank) {..., featuredImage{..., asset->}}`;
export const getAllApplicationTagsPaths = `*[_type == "application" && isWebsitePublished == true] | order(orderRank) {slug}`;
export const getAllApplicationTagDesigns = `*[_type == "asset" && isWebsitePublished == true && $slug in applications[]->slug.current && !(path match "projects")] | order(orderRank) {..., featuredImage{...,asset->}}`;
export const getApplicationTag = `*[_type == "application" && slug.current == $slug && isWebsitePublished == true] | order(orderRank) `;

// SPECIALTIES
export const getAllSpecialties = `*[_type == "asset" && defined(specialties) && isWebsitePublished == true] | order(orderRank) {..., featuredImage{...,asset->}}`;
export const getAllSpecialtieTags = `*[_type == "specialtie"] | order(orderRank) {..., featuredImage{..., asset->}}`;
export const getAllSpecialtieTagsPaths = `*[_type == "specialtie"] | order(orderRank) {slug}`;
export const getAllSpecialtieTagDesigns = `*[_type == "asset" && isWebsitePublished == true && $slug in specialties[]->slug.current && !(path match "projects")] | order(orderRank) {..., featuredImage{...,asset->}}`;
export const getSpecialtieTag = `*[_type == "specialtie" && slug.current == $slug] | order(orderRank)`;

// HOME PAGE
export const getHomePage = `*[_type == 'home']{..., pageBuilder[]{..., tags[]->,slides[]->{..., applications[]->, assets[]->, collections[]->, sectors[]->, designs[]->, specialties[]->, asset->}}}`;

// PAGE(s)
export const getPage = `*[_type == "page" && slug.current == $slug]{..., pageBuilder[]{..., tags[]->,slides[]->{..., applications[]->, assets[]->, collections[]->, sectors[]->, designs[]->, specialties[]->, asset->}}}`;
export const getAllPagesPaths = `*[defined(slug.current) && _type == "page"][].slug.current`;
export const getAllPages = `*[_type == "page" && isWebsitePublished == true && displayInFooter == true] | order(_updatedAt desc) { slug, title, footerMenuColumn}`;

// DESIGNS (Assets)
export const getAllDesignsPath = `*[_type == "asset" && isWebsitePublished == true && !(path match "projects")] | order(orderRank) {path, slug}`;
export const getAllDesigns = `*[_type == "asset" && isWebsitePublished == true && !(path match "projects")] | order(orderRank) {..., applications[]->, designs[]->, collections[]->, specialties[]->, sectors[]-> ,featuredImage {...,asset->}}`;
export const getDesign = `*[_type == "asset" && isWebsitePublished == true && slug.current == $slug] | order(orderRank) {..., applications[]->, sectors[]->, collections[]->, designs[]->}`;

// CLIENTS
export const getAllClients = `*[_type == "client"] | order(orderRank) `;

// TAG SEARCH
export const getAllSearchTags = `*[_type == "application" || _type == "specialtie" || _type == "attribute" || _type == "design" || _type == "sector" || _type == "collection"]{name, _id, _type, slug{current}}`;
export const getAllApplicationSearchTags = `*[_type == "application"]{name, _id, _type, slug{current}}`;

// PARTNERS
export const getAllPartners = `*[_type == "partner"] | order(orderRank) {..., Location->, locations[]->}`;
export const getAllPartnersPaths = `*[_type == "partner"] | order(orderRank) {slug}`;
export const getPartner = `*[_type == "partner" && slug.current == $slug] | order(orderRank) {..., Location->, locations[]->, pageBuilder[]{..., tags[]->,slides[]->{..., applications[]->, assets[]->, collections[]->, sectors[]->, designs[]->, specialties[]->, asset->}}}`;

// ALGOLIA QUERIES
export const allDesignsAlgolia = `*[_type == "asset" && isWebsitePublished == true && !(path match "projects")] | order(orderRank) {name, slug, _id, path, applications[]->, designs[]->, collections[]->, specialties[]->, sectors[]->, colors[]->, attributes[]->,featuredImage {...,asset->}}`;
export const allProjectsAlgolia = `*[_type == "caseStudy" && defined(asset->path) && asset->path match "/projects/" && isWebsitePublished == true] | order(orderRank) {..., asset->{..., applications[]->, designs[]->, collections[]->, specialties[]->, sectors[]->, colors[]->, attributes[]-> ,featuredImage{...,asset->}}, featuredImage{...,asset->}}`;

// ALL APPLICATIONS DESIGNS
export const getAllApplicationDesigns = `*[_type == "asset" && isWebsitePublished == true && !(path match "projects") && count(applications) > 0] | order(orderRank) {..., applications[]->, designs[]->, collections[]->, specialties[]->, sectors[]-> ,featuredImage {...,asset->}}`;
