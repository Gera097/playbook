const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("\nRepo object")
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   
   /* --------------------------------------------------------------------------- */

   const issue = {
     title: "06 Live 3 Semana 2 [Jueves 14 de abril]",
     repositoryNameAssociated: "MissionNodeJS",
     status: "Open",
     numberOfComments: 42,
     labels: ["FINALIZADO", "LIVE 3", "Semana-2"],
     author: "carlogilmar",
     dateCreated: "Apr 14",
     lastUpdated: "4 days ago",
     
     getTitleAndAuthor: function() {
       return `Title: ${this.title}, Author: ${this.author}`
     },
     getGeneralInfo: function () {
       return `This issue "${this.title}" was created by ${this.author}`
     }

   }

   console.log("\nIssue object")
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())

    /* --------------------------------------------------------------------------- */
    const pullRequest = {
      title: "Change of main title",
      author: "Gerardo Sánchez Alba",
      branchName: "main",
      dateCreated: "20/04/2022",
      status: "Accepted",
      repositoryNameAssociated: "Pokedex",

      getStatus: function(){
        return `Status del Pull Request: ${this.status}`
      },
      getTitleAndAuthor: function(){
        return `Title: ${this.title}, Author: ${this.author}`
      }
    }

    console.log("\nPull Request object")
    console.log(pullRequest.getStatus())
    console.log(pullRequest.getTitleAndAuthor())
