# cse135
UCSD CSE135 wi19

Group members:
  Mao-Heng Michael Cheng, mmc007@ucsd.edu
  Beier Li, bel060@ucsd.edu
  Cuong Lai, 

This repository holds most of the documents we need for the website. That is, the html, css, and pictures. We also have a few other files in here, such as some of the .conf files, .htaccess, phpinfo, and various other files.

The test.txt was just to help us test to make sure webhooks was running properly and that our servers were getting the commits made to this repository.

# Report README

The README written in the report is also below

README

Splitting this assignment
Each person created a droplet, so we would have one for apache2, one for nginx, and one for nodejs
From there, each person was responsible for a few of the tasks for all of the 3 servers.
Michael: Custom website page, custom error page, favicon
Beier: robots.txt, deploy from github, log files
Cuong: compress textual content, obscure server identity, run php, deliver clean urls
Steps taken to complete each task
Employ password protection
We all created our server with ssh key protection. We also all created a non-root user on our server. This was just for logging in to the server
For the website access, a .htpasswd file was created for the nginx and apache servers. From there, changes were made to the configuration files such that when accessing the directory where the website pages were saved in the server, a valid user and password saved in .htpasswd were required.
Static team page
Created the website from scratch, having a sub-directory for the css and pictures to be used in the html
To set it as the default page, had to edit the .conf files in /etc/apache2/, /etc/apache2/sites-available, and the nginx server equivalent of those files to point to /home/cse135/135pa1/server_pages/ as the default root directory to look for index.html instead of var/www/html
For nodejs, had to program it to use the .../server_pages/index.html as the default .html file to load when entering the site or ip address
Custom error pages
Similar to creating the static team page, created the error pages from scratch with html and css, then edited the .conf files to use these as the error pages for those errors
Favicon
This was just changing favicon.ico in the root directory. The new favicon.ico was uploaded to the servers via winSCP, and the html files also set the favicon as an extra measure.
Robots.txt
Simply created a robots.txt file in the root directory and add “User-agent: * Disallow: / “ to it. This will exclude all robots from the entire server. 
Deploy from github
First, had to create webhook in the repository for each of the servers and copy repository to each server
Second, had to create a script in each server that would listen to port 8080 for messages and program script to recognize github commits and update repository when event occurs.
Test request delivery serval times
Finally had to start this script as a service on the server.
Log properly
After successfully installed apache2 and Nginx on ubuntu, the server automatically created a log directory
For example, every request to my web server is recorded in this log file unless Nginx is configured to do otherwise. /var/log/nginx/access.log, and errors will be recording to this directory as well. For apache2 it’s the /var/log/apache2 directory
In order to use analysis program to report the logs, we installed GoAccess which is an interactive and real time web server log analyzer program that quickly analyze and view web server logs.
Finally use command goaccess to the log files and select format and have the report.
Compress textual content
Obscure server identity
This task was mostly configuring .conf files, adding code to turn off options that revealed our server information.
Run php
Installed php module on each server so that it could actually run php files 
Created a .php file that simply ran the “phpinfo();” command.
Deliver clean urls
For the apache server, this task consisted of creating a .htaccess file in the root directory and then add rewrite rules to it.
For the nginx server, mod_rewrite was used to accomplish this task.
