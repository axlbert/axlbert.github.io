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
    "biopic": "http://lorempixel.com/100/100/animals/7",
    "skills": ["CSS", "HTML", "JS", "Bootstrap"]
};

bio.display = function() {
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedHeaderRole);
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeaderName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts").append(formattedBlog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelMes);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    $("#header").append(HTMLskillsStart);
    for (var element in bio.skills) {
        if (bio.skills.hasOwnProperty(element)) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[element]);
            $("#header").append(formattedSkills);
        }
    }
};

bio.display();


var education = {
    "school": [{
        "name": "FHL",
        "location": "Luebeck, Germany",
        "degree": "Dipl.Wirt-Ing. FH",
        "majors": "Industrial Engineering",
        "dates": "2005-2009",
        "url": "http://www.fh-luebeck.de"
    }, {
        "name": "MSOE",
        "location": "Milwaukee, WI",
        "degree": "B.Sc.",
        "majors": "Industrial Engineering",
        "dates": "2008-2009",
        "url": "http://www.msoe.edu"
    }, {
        "name": "Cambridge University",
        "location": "Cambridge, UK",
        "degree": "M.phil.",
        "majors": "Manufacturing",
        "dates": "2010-2011",
        "url": "http://www.cam.ac.uk"
    }, ],
    "onlineCourses": [{
        "title": "Front-End Developer",
        "school": "Udacity",
        "date": "2015-2016",
        "url": "http://www.udacity.com"
    }, ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var place in education.school) {
        if (education.school.hasOwnProperty(place)) {
            var formatteduni = HTMLschoolName.replace("%data%", education.school[place].name);
            var formattedclass = HTMLschoolDates.replace("%data%", education.school[place].dates);
            var formattedmajor = HTMLschoolMajor.replace("%data%", education.school[place].majors);
            var formatteddegree = HTMLschoolDegree.replace("%data%", education.school[place].degree);
            var formattedlocation = HTMLschoolLocation.replace("%data%", education.school[place].location);
            $(".education-entry").append(formatteduni);
            $(".education-entry").append(formattedclass);
            $(".education-entry").append(formattedmajor);
            $(".education-entry").append(formatteddegree);
            $(".education-entry").append(formattedlocation);
        }
    }
};

education.display2 = function() {
    for (var place in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(place)) {
            var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[place].title);
            var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[place].school);
            var formatteddate = HTMLonlineDates.replace("%data%", education.onlineCourses[place].date);
            var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[place].url);
            $(".education-entry").append(HTMLonlineClasses);
            $(".education-entry").append(formattedtitle);
            $(".education-entry").append(formattedschool);
            $(".education-entry").append(formatteddate);
            $(".education-entry").append(formattedurl);
        }
    }
};

education.display();
education.display2();

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
    for (var job in work.jobs) {
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
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
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
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$('#footerContacts').append(formattedTwitter);
$('#footerContacts').append(formattedEmail);
$('#footerContacts').append(formattedMobile);