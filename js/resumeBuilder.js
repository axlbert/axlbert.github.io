var bio = {
    "name": "Alex Christian",
    "age": "30",
    "role": "Projects and Problem Solving",
    "contacts": {
        "mobile": "653-124-1244",
        "email": "alex@j127doe.com",
        "github": "https://github.com/axlbert/",
        "twitter": "https://twitter.com/axlb3rt",
        "blog": "https://www.smellslikelean.wordpress.com",
        "location": "Dusseldorf,Germany"
    },
    "welcomeMessage": "Howdy everyone! This is my FEND P2 Online Resume with real fake information. Enjoy!",
    "biopic": "http://lorempixel.com/960/300/animals/7",
    "skills": ["CSS", "HTML", "JS", "Bootstrap"]
};

bio.display = function() {
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedHeaderRole).prepend(formattedHeaderName).append(formattedPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedEmail).append(formattedMobile).append(formattedTwitter).append(formattedGithub).append(formattedBlog).append(formattedLocation);
    var formattedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#float-box").append(formattedWelMes).append(HTMLskillsStart);
    var len = bio.skills.length;
    for (var i = 0; i < len; i++) {
        if (bio.skills.hasOwnProperty(i)) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#float-box").append(formattedSkills);
        }
    }
    $('#footerContacts').append(formattedTwitter).append(formattedMobile).append(formattedEmail);
};

bio.display();


var education = {
    "school": [{
        "name": "FHL",
        "location": "Luebeck, Germany",
        "degree": "Dipl.Wirt-Ing. FH",
        "majors": {
            "major1": "Industrial Engineering"
        },
        "dates": 2009,
        "url": "http://www.fh-luebeck.de"
    }, {
        "name": "MSOE",
        "location": "Milwaukee, WI",
        "degree": "B.Sc.",
        "majors": {
            "major1": "Industrial Engineering"
        },
        "dates": 2009,
        "url": "http://www.msoe.edu"
    }, {
        "name": "Cambridge University",
        "location": "Cambridge, UK",
        "degree": "M.phil.",
        "majors": {
            "major1": "Manufacturing"
        },
        "dates": 2011,
        "url": "http://www.cam.ac.uk"
    }, ],
    "onlineCourses": [{
        "title": "Front-End Developer",
        "school": "Udacity",
        "date": 2016,
        "url": "http://www.udacity.com"
    }, ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    var len = education.school.length;
    for (var place = 0; place < len; place++) {
        if (education.school.hasOwnProperty(place)) {
            var formatteduni = HTMLschoolName.replace("%data%", education.school[place].name);
            var formattedclass = HTMLschoolDates.replace("%data%", education.school[place].dates);
            var formattedmajor = HTMLschoolMajor.replace("%data%", education.school[place].majors.major1);
            var formatteddegree = HTMLschoolDegree.replace("%data%", education.school[place].degree);
            var formattedlocation = HTMLschoolLocation.replace("%data%", education.school[place].location);
            $(".education-entry").append(formatteduni).append(formattedclass).append(formattedmajor).append(formatteddegree).append(formattedlocation);
        }
    }
    var len2 = education.onlineCourses.length;
    for (var mooc = 0; mooc < len2; mooc++) {
        if (education.onlineCourses.hasOwnProperty(mooc)) {
            var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[mooc].title);
            var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[mooc].school);
            var formatteddate = HTMLonlineDates.replace("%data%", education.onlineCourses[mooc].date);
            var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[mooc].url);
            $(".education-entry").append(HTMLonlineClasses).append(formattedtitle).append(formattedschool).append(formatteddate).append(formattedurl);
        }
    }
};

education.display();


var work = {
    "jobs": [{
        "employer": "Evil Corp",
        "title": "Business Analyst",
        "location": "Dusseldorf, Germany",
        "dates": "2011-2012",
        "description": "Was ich da gemacht hab weiss ich auch nicht mehr"
    }, {
        "employer": "Svakopi Inc",
        "title": "Schnupperer",
        "location": "Milton Keynes, United Kingdom",
        "dates": "2013-2015",
        "description": "Okapi-Kämmerer"
    }, {
        "employer": "Cable tie molding",
        "title": "Lärmling",
        "location": "Milwaukee, Wisconsin",
        "dates": "2015",
        "description": "Kümmerling"
    }]
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    var len = work.jobs.length;
    for (var job = 0; job < len; job++) {
        if (work.jobs.hasOwnProperty(job)) {
            var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedworktitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedworkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedworkdescr = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedjob = formattedemployer + formattedworktitle + formattedworklocation + formattedworkdates + formattedworkdescr;
            $(".work-entry:last").append(formattedjob);
        }
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Smurfsurf",
        "dates": "2014",
        "description": "snappadoo didledidoo troudlewhoo",
        "images": ["http://lorempixel.com/100/80/animals/1", "http://lorempixel.com/100/80/animals/2", "http://lorempixel.com/100/80/animals/10"]
    }, {
        "title": "rabooki",
        "dates": "2015",
        "description": "knusper knusper knäuschen",
        "images": ["http://lorempixel.com/100/80/animals/3", "http://lorempixel.com/100/80/animals/4", "http://lorempixel.com/100/80/animals/8"]
    }, {
        "title": "KNOPS KNOPS",
        "dates": "2015",
        "description": "li la lu",
        "images": ["http://lorempixel.com/100/80/animals/5", "http://lorempixel.com/100/80/animals/6", "http://lorempixel.com/100/80/animals/9"]
    }]
};



projects.display = function() {
    var len = projects.projects.length;
    for (var project = 0; project < len; project++) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                var len2 = projects.projects[project].images.length;
                for (var image = 0; image < len2; image++) {
                    if (projects.projects.hasOwnProperty(image)) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#mapDiv").append(googleMap);