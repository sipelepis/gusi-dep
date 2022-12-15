
This Digital Repository is built using DSpace 7.4.Therefore, to have an in-depth guide, you must visit their tutorial on how to install both the backend and the frontend. This guide will merely discuss the non-trivial parts of installing the system in your local server.

In-depth DSpace installation guide: https://wiki.lyrasis.org/display/DSDOC7x/Installing+DSpace

System Requirements for GUSI backend and frontend:

OS - Ubuntu 22.04 (Jammy Jellyfish) Java JDK - 11 (openjdk) Apache Maven 3.8.6 PostgreSQL 13 Apache Solr 8.11.2 Apache Tomcat 9 MaxMind GeoIP Apache2 NodeJS v 14.x or v 16.x Yarn v1.x or better pm2 Git

#Steps to intall the GUSI backend:

You must have all of the necessary tools ready in your system. (This tutorial will not go in-depth on the basics)

Install pgcrypto extension on your postgresql

Create a login role with all privileges and name it as "dspace"

Unzip the backend.

Create a new terminal instance and run "sudo su" to use the root access.

Enter your password.

Run command "mkdir /dspace && chown [user] /dspace"

Using terminal, change directory to backend root directory by running, "cd [gusi-backend]" as local user

Run command "mvn package"

Run command "cd [gusi-backend]/dspace/target/dspace-installer"

Run command, "ant fresh_install" this install a dspace instance to the newly created "/dspace" directory

Run command, "cd /dspace"

Run command, "bin/dspace database migrate"

Copy the file named "server.xml" to your instance of tomcat (commonly found at /opt/tomcat/conf/Catalina/localhost

To test whether the backend is active on tomcat: start solr, restart tomcat and open "http://localhost:8080/server".

Copy the backend solr cores to your local solr by running: "cp -R [dspace]/solr/* [solr]/server/solr/configsets" and make sure solr has right access to the configsets directory "chown -R solr:solr [solr]/server/solr/configsets"

Restart solr by running: "cd [solr]" and "bin/solr restart"

Create an admin by running: "cd /dspace" and "bin/dspace create-administrator"

#Steps to install the GUSI frontend:

Unzip the GUSI frontend ("gusi.zip")
Run command: "cd [gusi]" and "yarn install"
Run command: "yarn run build:prod"
Unzip the GUSI frontend deploy ("gusi-dep.zip")
Run command: "cp -r [gusi]/dist [gusi-dep]
Run command: "cd [gusi-dep]" and "pm2 start gusi-ui.json"
You will now be able to view the website via localhost:4000 or your domain.
Starting the GA analytics REST API:

Unzip the Google Analytics REST API ("ga.zip")
Run command: "cd [ga]" and "yarn dev" to start the ga RESTful API.

#-->CREATING HTTPS SUPPORT (Recommended)<--

Expose the server by creating a virtual host. To do so, copy the file named "000-default.conf" to your apache2 virtual hosts (often found at sites-available from apache2 root directory)
run command "sudo a2ensite 000-default.conf" and run "sudo systemctl restart apache2"
You have various options on how to expose your local server, I have found it easier and more secure to host it on cloudflared since they provide a free ssl for tunneled servers.
Make sure the gusi rest api is exposed by accessing your own domain that points to your own web server.

NOTE: YOU MUST CONFIGURE THE config.prod.yml and set there your proper domain for the RESTful API and for localhost.

For more questions, you can reach me out via my UE Gmail account: moran.phillipjan@ue.edu.ph
