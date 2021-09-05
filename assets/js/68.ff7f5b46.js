(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{641:function(e,t,n){"use strict";n.r(t);var s=n(5),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("This post will show you how to configure a Jenkins pipeline that will automatically build your project when you push code to a GitLab repository. We will be using a Jenkinsfile to define our pipeline, which is best practice.\nHere’s the workflow:\nPush to GitLab → Jenkins pipeline triggered → Run build (Maven) → Run JUnit tests (Maven) → Email result from pipeline\nIf you don’t already have GitLab and Jenkins installed, you can follow the instructions in this post and then come back here.\nThis post also assumes you have Java, Git, and Maven installed, along with a simple Maven project with at least one JUnit test. Make sure you’re able to successfully run mvn clean install and mvn test on your project before following along.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_zxRWg_D0NSuRYD38rX64AA.png",alt:"Jenkins Pipe1"}})]),e._v(" "),n("h1",{attrs:{id:"step-1-create-a-gitlab-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-a-gitlab-repository"}},[e._v("#")]),e._v(" Step 1: Create a GitLab Repository")]),e._v(" "),n("p",[e._v("In GitLab, create a group by clicking on the Groups dropdown and then clicking the New group button. Give your group a name and then click Create group.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_RGqRiQAh0oldwqAErdhASw.png",alt:"Jenkins Pipe2"}})]),e._v(" "),n("p",[e._v("Create a new project by clicking New project. Give it a name and click Create project.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_B_2gzjgzVCdWZhCtHEK6-Q.png",alt:"Jenkins Pipe3"}})]),e._v(" "),n("p",[e._v("Initialize your local Maven project and push it to your new repository:")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" existing_folder\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin http://localhost/my-group/my-project.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Initial commit"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin master\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("Refresh your project in GitLab and you should see your code. If you see a banner saying “The Auto DevOps pipeline has been enabled…” go into settings and disable it.")]),e._v(" "),n("h1",{attrs:{id:"step-2-create-a-jenkins-user-in-gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-a-jenkins-user-in-gitlab"}},[e._v("#")]),e._v(" Step 2: Create a Jenkins User in GitLab")]),e._v(" "),n("p",[e._v("We need to create a Jenkins user in GitLab so that Jenkins can communicate with GitLab’s API via the plugin we will install in Step 4.\nIn GitLab, go to the Admin Area by clicking on the wrench icon in the top toolbar.")]),e._v(" "),n("p",[e._v("In the left menu, click on Users and then click New user at the top right hand corner. Fill out the required fields appropriately and make sure to select the Admin radio button under Access level:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_ZRTdQCBRsiXHW1sB8WZM5Q.png",alt:"Jenkins Pipe4"}})]),e._v(" "),n("p",[e._v("Go back to the Users page and edit the Jenkins user you just created. Give the user a password so that you can log in as that user. Once you’ve done this, log out of your current session and log in as the Jenkins user.\nOnce logged in as the Jenkins user, go to your settings and click Access Tokens in the left menu bar. Make sure to give your token a name and select api under Scopes.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_Cau3JzuTX5cKYSlwmg41QA.png",alt:"Jenkins Pipe5"}})]),e._v(" "),n("p",[e._v("Once you have created the access token, copy and paste the token somewhere temporarily — you will not be able to access it from here again. We will use this token later.\nLog out and log back in as the root user.")]),e._v(" "),n("h1",{attrs:{id:"step-3-create-a-gitlab-user-in-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-3-create-a-gitlab-user-in-jenkins"}},[e._v("#")]),e._v(" Step 3: Create a GitLab User in Jenkins")]),e._v(" "),n("p",[e._v("Now, we need to create a GitLab user in Jenkins so that GitLab can notify Jenkins of updates to the repository via webhooks.\nFrom the Jenkins homepage, go to Manage Jenkins → Manage Users → Create User and fill in the form.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_h6iPjC-4b7Kbk30csafyeA.png",alt:"Jenkins Pipe6"}})]),e._v(" "),n("p",[e._v("After creating the user, log out and log back in as the “gitlab” user.\nGo to Manage Jenkins → Manage Users and click on the gear icon next to the gitlab user to configure it. Under API Token, click Add new Token and give it a name, then click Generate.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_aq0KlMJPnYDkPMCz_Ul-1w.png",alt:"Jenkins Pipe7"}})]),e._v(" "),n("p",[e._v("Once you have generated the token, copy and paste the token somewhere temporarily — you will not be able to access it from here again. We will use this token later.\nLog out and log back in as the admin user.")]),e._v(" "),n("h1",{attrs:{id:"step-4-install-and-configure-gitlab-plugin-for-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-4-install-and-configure-gitlab-plugin-for-jenkins"}},[e._v("#")]),e._v(" Step 4: Install and Configure GitLab Plugin for Jenkins")]),e._v(" "),n("p",[e._v("We need to install the GitLab plugin for Jenkins so that they can communicate with each other.\nOn the Jenkins homepage, click on Manage Jenkins → Manage Plugins. Click on the Available tab and search for “gitlab” and install the GitLab plugin.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_DmXrE5yjMZZRnoMuEsdwNQ.png",alt:"Jenkins Pipe8"}})]),e._v(" "),n("p",[e._v("Check the box for “Restart Jenkins when installation is complete…” If you miss this, you can also restart Jenkins with sudo "),n("code",[e._v("systemctl restart jenkins")]),e._v(" after the download has finished.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_q3H7M4GTq7Cz8uA4wvohfg.jpeg",alt:"Jenkins Pipe9"}})]),e._v(" "),n("p",[e._v("After about a minute, refresh the page and log back in as the admin user again.\nIn Jenkins, go to Manage Jenkins → Configure System and scroll down to the Gitlab section. Enter in a name for the connection, the URL to your GitLab instance, and then next to Credentials, click Add → Jenkins. This is where you will add your GitLab token from Step 2.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_5wBEBvOFM8umC9uuhgP-Cw.png",alt:"Jenkins Pipe10"}})]),e._v(" "),n("p",[e._v("Next to Kind, select GitLab API Token. Paste your GitLab API token and give it an ID and a description, and click Add to add the token to Jenkins:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_3G72OilRB69NSCQwPEb6jw.png",alt:"Jenkins Pipe11"}})]),e._v(" "),n("p",[e._v("Click the dropdown next to Credentials and select the token. Then click Test Connection — you should see “Success” afterward:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_fTE2XG_QkAMoIxGwL-9J0Q.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Click Save at the bottom of the screen to save your changes. You can view your newly created credential at Manage Jenkins → Credentials.\nNow Jenkins is ready to communicate with the GitLab API.")]),e._v(" "),n("h1",{attrs:{id:"step-5-create-a-jenkins-pipeline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-5-create-a-jenkins-pipeline"}},[e._v("#")]),e._v(" Step 5: Create a Jenkins Pipeline")]),e._v(" "),n("p",[e._v("On the Jenkins homepage, click New Item in the left menu bar. Enter the name for the item and select Pipeline. Click OK to create it:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_SGIwwmgJF7ZadvlRXGO1mA.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("The next thing you will see is the pipeline configuration page. Check the box for Discard old builds and set Max # of builds to keep to a reasonable number (I chose 3 for this tutorial):")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_c7fZWOIzruYaFXUT9ZHWzg.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Ensure that the connection you created in Step 4 is selected next to GitLab Connection:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_DOCwZJYBHhA9XvGlfcQEEA.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Under the Build Triggers section, check the box for Build when a change is pushed to GitLab and copy the GitLab webhook URL next to it for later. Leave the Enabled GitLab triggers section unchanged:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_xHMNSRGy0l8MV6B2P2nckQ.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Under the Pipeline section, select Pipeline script from SCM from the Definition dropdown (this will be the Jenkinsfile described later) and select Git from the SCM dropdown. Enter the repository URL (same as what you use for git clone). You should see an authentication error because we haven’t provided a username/password that can access your GitLab repository yet:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_4WshKFBNdq80y_LiyDR3Sw.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Next to Credentials, click Add → Jenkins and fill in your GitLab username/password and click Add:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_P7PEcXWUKYuDBydgsaiESg.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Select your credential from the Credentials dropdown and the authentication error should go away. If it doesn’t, ensure you have the right username/password and that the user has access rights to the repository.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_p8d96s1Qo2PQpeI0QKXOPA.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Click Save at the bottom of the screen.")]),e._v(" "),n("h1",{attrs:{id:"step-6-configure-a-webhook-in-gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-6-configure-a-webhook-in-gitlab"}},[e._v("#")]),e._v(" Step 6: Configure a Webhook in GitLab")]),e._v(" "),n("p",[e._v("We need a way for GitLab to tell Jenkins when code has been pushed to a repository — this is what webhooks are for.\nNOTE: If your Jenkins instance is running on localhost, follow these steps to allow GitLab to send requests locally:\nGo to the Admin Area\nHover over Settings and click Network\nExpand Outbound requests\nCheck the box for Allow requests to the local network from web hooks and services\nClick Save changes\nIn GitLab, go to your project and then hover over Settings at the bottom of the left menu bar, then click on Webhooks.\nEnter in the URL to your Jenkins pipeline (the one you copied from the last step) and modify it so that it follows this scheme:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("http://<gitlab-user-in-jenkins>:<token>@<host>/project/<project-name>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Leave the Secret Token field blank and ensure that Push events is checked.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_X7BK7kbAEh1Mncne14DOVw.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Click Add webhook and then scroll down to the bottom to see your webhook. Test it by clicking Test → Push events. You should see a 200 status code:")]),e._v(" "),n("p",[e._v("If you go back to Jenkins, you should see a failed build — this is good news because it means that the webhook worked, and that Jenkins is able to listen for pushes to your GitLab repository.\nIf you inspect the Jenkins build console output, you will see something similar to this error:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_T2h9N3QMq5vaUraeIzeb4w.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("h1",{attrs:{id:"step-7-add-a-jenkinsfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-7-add-a-jenkinsfile"}},[e._v("#")]),e._v(" Step 7: Add a Jenkinsfile")]),e._v(" "),n("p",[e._v("Inside your git repository, create a file named “Jenkinsfile” at the root level.\nPaste the following into your Jenkinsfile and push it to your repository:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent any\n    \n    stages {\n        stage('Build') {\n            steps {\n                sh 'mvn clean install -DskipTests'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh 'mvn test'\n            }\n        }\n    }   \n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[e._v("This Jenkinsfile is telling Jenkins to split the build up into stages — first a “Build” stage that builds our Maven project and then a “Test” stage that runs our JUnit tests through Maven.\nAssuming you have Maven installed and configured on the same machine that Jenkins is running on, you should see something like the following when you view your pipeline project in Jenkins:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_Omr8diPglypKPE07GUjkwQ.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("If you see a red rectangle instead of a green one in the Build or Test stages, it means that either your code failed to build or one of your unit tests failed. You can inspect the entire process by clicking on the build in the Build History section and then clicking on Console Output.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_lqHfBc-DN4_Jl0b7Gw-reA.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("h1",{attrs:{id:"step-8-email-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-8-email-notifications"}},[e._v("#")]),e._v(" Step 8: Email Notifications")]),e._v(" "),n("p",[e._v("It is common practice to have the pipeline send an email to the user who pushed their code to let them know whether their build passed or failed.\nIf you don’t already have “Email Extension Plugin” installed, install that plugin before continuing.\nNOTE: Make sure the GitLab account you are pushing from has a valid email address — this is the address your pipeline will send an email to.\nConfigure the plugin by going to Manage Jenkins → Configure System and scrolling down to Extended E-mail Notification.\nFill in your SMTP server, click Advanced… and check the box for Use SMTP Authentication. Fill in your username (email address) and password, then check the box for Use SSL. Enter 465 for the SMTP port:")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_7Y1uLCVr-dX6TyzHlJTuXw.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Scroll back up to the top, and under Jenkins Location, change the System Admin e-mail address to “Jenkins "),n("a",{attrs:{href:"mailto:jenkins@jenkins"}},[e._v("jenkins@jenkins")]),e._v("” — this will appear as the sender name in the email you will receive.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_d6_i2skZkr7y-CWZYE7PHw.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Click Save at the bottom.\nIn your Jenkinsfile, add the following “post” section after the “stages” section and push it to your repository.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_d6_i2skZkr7y-CWZYE7PHw.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent any\n    \n    stages {\n        stage('Build') {\n            steps {\n                sh 'mvn clean install -DskipTests'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh 'mvn test'\n            }\n        }\n    }\n    \n    post {\n        always {\n            emailext subject: \"Jenkins Build ${currentBuild.currentResult}: Job \\\"${env.JOB_NAME}\\\"\",\n                body: \"${currentBuild.currentResult}: Job \\\"${env.JOB_NAME}\\\" build ${env.BUILD_NUMBER}.\\nMore info at: ${env.BUILD_URL}\",\n                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']]\n        }\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br")])]),n("p",[e._v("Here, we’re telling Jenkins to always send an email to the user after the build completes, and giving it a template for how to display the information.\nGo back to your Jenkins pipeline to see it running. If all went well, you should see something similar to the following and should have also received an email.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_V3nwYMmky_tN7yg-42x5yQ.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"/1_cbi7Auiu-Ni4L15NHuIRBA.png",alt:"Jenkins Pipe12"}})]),e._v(" "),n("p",[e._v("Congratulations! You have successfully set up a Jenkins pipeline to automatically build Java projects from GitLab.")])])}),[],!1,null,null,null);t.default=a.exports}}]);