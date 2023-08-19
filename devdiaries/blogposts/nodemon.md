---
title: 'Best ways to fix Nodemon error- nodemon.ps1 cannot be loaded because running scripts is disabled on this system.'
date: '2023-05-31'
---
Welcome to my blog, where we dive into the intriguing world of [Node.js](https://www.w3schools.com/nodejs/) development and tackle one of the common stumbling blocks many developers encounter: the "**Nodemon Error - nodemon.ps1 cannot be loaded because running scripts is disabled on this system.**" If you've ever come across this error while working with [Nodemon](https://nodemon.io/), fear not! In this article, we will explore the causes behind this issue, understand why scripts are disabled on certain systems and most importantly, provide you with practical solutions to overcome this obstacle and keep your development workflow seamless. So, let's embark on this troubleshooting journey together and empower ourselves to conquer the Nodemon Error!

![Error Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x66hivwv8we53nwri2qa.png)

### Causes behind the Error⚠️
Before we dive into the solutions, let's first understand why the "**nodemon.ps1 cannot be loaded**" error occurs in the first place. _By default, Windows PowerShell has a restricted execution policy, which means that it will only run scripts that are signed by a trusted publisher._ This helps to prevent malicious scripts from being executed on your system.

### 2 ways to fix the error are🛠️

1. Unrestricting the <u>Execution-Policy</u>.
2. Deleting the <u>nodemon.ps1</u> from local device.

### 1. Unrestricting the Execution-Policy.
#### Step 1:
open Windows PowerShell as an administrator.
#### Step 2:
Run the following command in the PowerShell.

```
Get-ExecutionPolicy
```

It will give you "**Restricted**" or "**AllSigned**" or "**RemoteSigned**". So, this is the main reason behind the error as running scripts on the system is '**Restricted**'.
#### Step 3:
Use this command to make it Unrestricted -

```
Set-ExecutionPolicy Unrestricted
```

After executing the command, you will get to see a prompt asking for allowance to change the execution policy.
**Press Y** to change the execution policy.
The **problem** is **solved**. Now you can use **nodemon** on your machine.

> **Disclaimer:** Note that running scripts with an unrestricted execution policy can be a security risk. If you are not sure whether or not a script is safe to run, you should not run it.
**This way is not much advisable as  Changing the execution policy might expose you to the security risks described in the**
 [about_Execution_Policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2)

***
### 2. Deleting the nodemon.ps1 from local device.

*So we have another solution which is very easy and safe😍*

#### Step 1:
Open your File Explorer and enter the path in the File path section

```
C:\Users\(Your username)\AppData\Roaming\npm
```

![File Location Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0h86pmxwqudzgdes6oje.png)

#### Step 2:
Delete the file with name-->nodemon and type-->windows PowerShell script(.ps1) in properties.

![File](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nks45fo6w0gekt5lgbci.png)

![File properties](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8iyflufrp4uz6tkvsgeo.png)

Hooray! The **error** is **fixed**. Now you can use **nodemon** on your machine.

![perfect output](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v2q53daj7owjzha3th1k.png)

This is the easiest and safest way as compared to the first way, Hence it is much advisable to use.
Now its upto you .... which one you choose.

### Conclusion:
In conclusion, the "**Nodemon Error - nodemon.ps1 cannot be loaded because running scripts is disabled on this system**" can be a frustrating obstacle for Node.js developers. However, armed with the knowledge and solutions provided in this blog post, you are now prepared to overcome this issue and recover control of your Nodemon-powered development workflow.
In this article we have discussed 2 ways to fixed this error and both the ways are explained properly with pros and cons.
I hope this article has been helpful in **troubleshooting** and **resolving** this common issue.
**Stay tuned🤗 for more insightful content, practical tips, and solutions to keep your development journey smooth and error-free. Happy coding😉!**
