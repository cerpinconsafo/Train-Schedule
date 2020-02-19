# Train Scheduler
#### unit 7 Firebase - JS/jQuery - Patrick Skolsky
----

## Table of Contents
* [Deployed Page](#deployed-page)
* [Updates](#updates)
* [Assigment Details](#assignment-details)
* [Problems](#problems)


----

## Deployed Page

https://cerpinconsafo.github.io/Train-Schedule/

----

## Updates

#### Last Update: 
  02/02/20

#### What was Updated: 
  Finally fixed my issue with Firebase and Momemnt.js 

----

## Assignment Details
### Overview

In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

- - -

### Setup

* We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and GitHub Pages to host your finished site.

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Instructions

* Make sure that your app suits this basic spec:
  
  * When adding trains, administrators should be able to submit the following:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
  * Users from many different machines must be able to view same train times.
  
  * Styling and theme are completely up to you. Get Creative!

### Example Site

![train homework](Train_Time_Image.png)

### Bonus (Extra Challenges)

* Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.

   
----

## Problems

I had an issue with my firebase credentials that I did not catch.  Also, my logic to convert the input data fields taken from firebase into moment.js info was overly complicated, causing my script to fail to run.
 
----







