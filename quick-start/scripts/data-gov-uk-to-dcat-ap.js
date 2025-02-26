function transforming(input) {

    var output = {
        "@context": {
            "Agent":"http://xmlns.com/foaf/0.1/Agent",
            "Catalog":"http://www.w3.org/ns/dcat#Catalog",
            "CatalogRecord":"http://www.w3.org/ns/dcat#CatalogRecord",
            "Checksum":"http://spdx.org/rdf/terms#Checksum",
            "Concept":"http://www.w3.org/2004/02/skos/core#Concept",
            "ConceptScheme":"http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "Dataset":"http://www.w3.org/ns/dcat#Dataset",
            "Distribution":"http://www.w3.org/ns/dcat#Distribution",
            "Document":"http://xmlns.com/foaf/0.1/Document",
            "Frequency":"http://purl.org/dc/terms/Frequency",
            "Identifier":"http://www.w3.org/ns/adms#Identifier",
            "Kind":"http://www.w3.org/2006/vcard/ns#Kind",
            "LicenseDocument":"http://purl.org/dc/terms/LicenseDocument",
            "LinguisticSystem":"http://purl.org/dc/terms/LinguisticSystem",
            "Literal":"http://www.w3.org/2000/01/rdf-schema#Literal",
            "Location":"http://purl.org/dc/terms/Location",
            "MediaTypeOrExtent":"http://purl.org/dc/terms/MediaTypeOrExtent",
            "PeriodOfTime":"http://purl.org/dc/terms/PeriodOfTime",
            "ProvenanceStatement":"http://purl.org/dc/terms/ProvenanceStatement",
            "Resource":"http://www.w3.org/2000/01/rdf-schema#Resource",
            "RightsStatement":"http://purl.org/dc/terms/RightsStatement",
            "Standard":"http://purl.org/dc/terms/Standard",

            "accessRights":{
                "@id":"http://purl.org/dc/terms/accessRights",
                "@type":"http://purl.org/dc/terms/RightsStatement"
            },
            "accessURL":{
                "@id":"http://www.w3.org/ns/dcat#accessURL",
                "@type":"http://www.w3.org/2000/01/rdf-schema#Resource"
            },
            "accrualPeriodicity":{
                "@id":"http://purl.org/dc/terms/accrualPeriodicity",
                "@type":"http://purl.org/dc/terms/Frequency"
            },
            "algorithm":{
                "@id":"http://spdx.org/rdf/terms#algorithm",
                "@type":"http://spdx.org/rdf/terms#checksumAlgorithm_sha1"
            },
            "application_profile":{
                "@id":"http://purl.org/dc/terms/conformsTo",
                "@type":"http://www.w3.org/2000/01/rdf-schema#Resource"
            },
            "byteSize":{
                "@id":"http://www.w3.org/ns/dcat#byteSize",
                "@type":"http://www.w3.org/2001/XMLSchema#decimal"
            },
            "checksum":{
                "@id":"http://spdx.org/rdf/terms#checksum",
                "@type":"http://spdx.org/rdf/terms#Checksum"
            },
            "checksumValue":{
                "@id":"http://spdx.org/rdf/terms#checksumValue",
                "@type":"http://www.w3.org/2001/XMLSchema#hexBinary"
            },
            "conforms_to":{
                "@id":"http://purl.org/dc/terms/conformsTo",
                "@type":"http://purl.org/dc/terms/Standard"
            },
            "contactPoint":{
                "@id":"http://www.w3.org/ns/dcat#contactPoint",
                "@type":"http://www.w3.org/2006/vcard/ns#Kind"
            },
            "dataset":{
                "@id":"http://www.w3.org/ns/dcat#dataset",
                "@type":"http://www.w3.org/ns/dcat#Dataset"
            },
            "description":{
                "@id":"http://purl.org/dc/terms/description",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "distribution":{
                "@id":"http://www.w3.org/ns/dcat#distribution",
                "@type":"http://www.w3.org/ns/dcat#Distribution"
            },
            "downloadURL":{
                "@id":"http://www.w3.org/ns/dcat#downloadURL",
                "@type":"http://www.w3.org/2000/01/rdf-schema#Resource"
            },
            "endDate":{
                "@id":"http://schema.org/endDate"
            },
            "format":{
                "@id":"http://purl.org/dc/terms/format",
                "@type":"http://purl.org/dc/terms/MediaTypeOrExtent"
            },
            "hasPart":{
                "@id":"http://purl.org/dc/terms/hasPart",
                "@type":"http://www.w3.org/ns/dcat#Catalog"
            },
            "hasVersion":{
                "@id":"http://purl.org/dc/terms/hasVersion",
                "@type":"http://www.w3.org/ns/dcat#Dataset"
            },
            "homepage":{
                "@id":"http://xmlns.com/foaf/0.1/homepage",
                "@type":"http://xmlns.com/foaf/0.1/Document"
            },
            "identifier":{
                "@id":"http://purl.org/dc/terms/identifier",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "isPartOf":{
                "@id":"http://purl.org/dc/terms/isPartOf",
                "@type":"http://www.w3.org/ns/dcat#Catalog"
            },
            "issued":{
                "@id":"http://purl.org/dc/terms/issued"
            },
            "isVersionOf":{
                "@id":"http://purl.org/dc/terms/isVersionOf",
                "@type":"http://www.w3.org/ns/dcat#Dataset"
            },
            "keyword":{
                "@id":"http://www.w3.org/ns/dcat#keyword",
                "@type":"http://www.w3.org/2000/01/rdf-schema#Literal"
            },
            "landingPage":{
                "@id":"http://www.w3.org/ns/dcat#landingPage",
                "@type":"http://xmlns.com/foaf/0.1/Document"
            },
            "language":{
                "@id":"http://purl.org/dc/terms/language",
                "@type":"http://purl.org/dc/terms/LinguisticSystem"
            },
            "license":{
                "@id":"http://purl.org/dc/terms/license",
                "@type":"http://purl.org/dc/terms/LicenseDocument"
            },
            "linked_schemas":{
                "@id":"http://purl.org/dc/terms/conformsTo",
                "@type":"http://purl.org/dc/terms/Standard"
            },
            "mediaType":{
                "@id":"http://www.w3.org/ns/dcat#mediaType",
                "@type":"http://purl.org/dc/terms/MediaTypeOrExtent"
            },
            "modified":{
                "@id":"http://purl.org/dc/terms/modified"
            },
            "name":{
                "@id":"http://xmlns.com/foaf/0.1/name",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "notation":{
                "@id":"http://www.w3.org/2004/02/skos/core#notation",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "other_identifier":{
                "@id":"http://www.w3.org/ns/adms#identifier",
                "@type":"http://www.w3.org/ns/adms#Identifier"
            },
            "page":{
                "@id":"http://xmlns.com/foaf/0.1/page",
                "@type":"http://xmlns.com/foaf/0.1/Document"
            },
            "prefLabel":{
                "@id":"http://www.w3.org/2004/02/skos/core#prefLabel",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "primaryTopic":{
                "@id":"http://xmlns.com/foaf/0.1/primaryTopic",
                "@type":"http://www.w3.org/ns/dcat#Dataset"
            },
            "provenance":{
                "@id":"http://purl.org/dc/terms/provenance",
                "@type":"http://purl.org/dc/terms/ProvenanceStatement"
            },
            "publisher":{
                "@id":"http://purl.org/dc/terms/publisher",
                "@type":"http://xmlns.com/foaf/0.1/Agent"
            },
            "record":{
                "@id":"http://www.w3.org/ns/dcat#record",
                "@type":"http://www.w3.org/ns/dcat#CatalogRecord"
            },
            "relation":{
                "@id":"http://purl.org/dc/terms/relation",
                "@type":"http://www.w3.org/2000/01/rdf-schema#Resource"
            },
            "rights":{
                "@id":"http://purl.org/dc/terms/rights",
                "@type":"http://purl.org/dc/terms/RightsStatement"
            },
            "sample":{
                "@id":"http://www.w3.org/ns/adms#sample",
                "@type":"http://www.w3.org/ns/dcat#Distribution"
            },
            "source":{
                "@id":"http://purl.org/dc/terms/source",
                "@type":"http://www.w3.org/ns/dcat#Dataset"
            },
            "source_metadata":{
                "@id":"http://purl.org/dc/terms/source",
                "@type":"http://www.w3.org/ns/dcat#CatalogRecord"
            },
            "spatial":{
                "@id":"http://purl.org/dc/terms/spatial",
                "@type":"http://purl.org/dc/terms/Location"
            },
            "startDate":{
                "@id":"http://schema.org/startDate"
            },
            "status":{
                "@id":"http://www.w3.org/ns/adms#status",
                "@type":"http://www.w3.org/2004/02/skos/core#Concept"
            },
            "temporal":{
                "@id":"http://purl.org/dc/terms/temporal",
                "@type":"http://purl.org/dc/terms/PeriodOfTime"
            },
            "theme":{
                "@id":"http://www.w3.org/ns/dcat#theme",
                "@type":"http://www.w3.org/2004/02/skos/core#Concept"
            },
            "themeTaxonomy":{
                "@id":"http://www.w3.org/ns/dcat#themeTaxonomy",
                "@type":"http://www.w3.org/2004/02/skos/core#ConceptScheme"
            },
            "title":{
                "@id":"http://purl.org/dc/terms/title",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "type":{
                "@id":"http://purl.org/dc/terms/type",
                "@type":"http://www.w3.org/2004/02/skos/core#Concept"
            },
            "versionInfo":{
                "@id":"http://www.w3.org/2002/07/owl#versionInfo",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            },
            "versionNotes":{
                "@id":"http://www.w3.org/ns/adms#versionNotes",
                "@type":"http://www.w3.org/2001/XMLSchema#string"
            }
        }
    };

    // Basics

//    output["@id"] = input.name;
    output["@type"] = "Dataset";

    // Mandatory properties

    output.title = [
        {
            "@value": input.title,
            "@language": params.defaultLanguage
        }
    ];

    output.description = [
        {
            "@value": input.notes,
            "@language": params.defaultLanguage
        }
    ];

    // Recommended properties

    if (input["contact-name"]) {
        output.contactPoint = [
            {
                "@type": "Kind",
                "http://www.w3.org/2006/vcard/ns#fn": input["contact-name"],
                "http://www.w3.org/2006/vcard/ns#hasEmail": {
                    "@id": encodeURI(decodeURI("mailto:" + input["contact-email"]))
                }
            }
        ];
    }

    if (input.resources) {
        output.distribution = [];
        for (const resource of input.resources) {
            if (resource.url) {
                let dist = {
                    "@type": "Distribution",
                    "identifier": resource.id,
                    "accessURL": {
                        "@id": encodeURI(decodeURI(resource.url))
                    },
                    "description": [{
                        "@value": resource.description,
                        "@language": params.defaultLanguage
                    }]
                };
                if (resource.name) {
                    dist.title = [{
                        "@value": resource.name,
                        "@language": params.defaultLanguage
                    }];
                }
                if (resource.format) {
                    dist.format = {
                        "@id": encodeURI(decodeURI("http://publications.europa.eu/resource/authority/file-type/" + resource.format.trim()))
                    }
                }
                if (input.license_id || input.license_url || input.license_title) {
                    dist.license = {
                        "@type": "LicenseDocument"
                    };
                    if (input.license_id) {
                        dist.license.identifier = input.license_id;
                    }
                    if (input.license_title) {
                        dist.license.title = input.license_title;
                    }
                    if (input.license_url) {
                        dist.license["@id"] = encodeURI(decodeURI(input.license_url))
                    }
                }
                output.distribution.push(dist);
            }
        }
    }

    if (input.tags) {
        output.keyword = [];
        for (const tag of input.tags) {
            output.keyword.push({
                "@value": tag.name,
                "@language": params.defaultLanguage
            });
        }
    }

    if (input.organization) {
        output.publisher = {
            "@type": "Agent",
            "name": input.organization.title,
            "type": {
                "@id": "http://purl.org/adms/publishertype/NationalAuthority"
            }
        };
    }

    if (input["theme-primary"]) {
        const categories = {
            "agriculture": "AGRI",
            "education": "EDUC",
            "environment": "ENVI",
            "transport": "TRAN",
            "business-and-economy": "ECON",
            "society": "SOCI",
            "health": "HEAL",
            "government": "GOVE",
            "government-reference-data": "GOVE",
            "government-spending": "GOVE",
            "towns-and-cities": "REGI",
            "mapping": "REGI",
            "crime-and-justice": "JUST",
            "defence": "INTR",
            "digital-services-performance": "GOVE"
        };
        if (categories[input["theme-primary"].trim()]) {
            output.theme = [
                {
                    "@id": encodeURI("http://publications.europa.eu/resource/authority/data-theme/" + categories[input["theme-primary"].trim()])
                }
            ]
        }
    }

    // Optional properties

    if (input.extras) {
        for (const extra of input.extras) {
            if (extra.value === "") continue;
            switch (extra.key) {
                case "dcat_issued":
                    output.issued = extra.value;
                    break;
                case "dcat_modified":
                    output.modified = extra.value;
                    break;
            }
        }
    }

    // Finalize

    return output;
}

