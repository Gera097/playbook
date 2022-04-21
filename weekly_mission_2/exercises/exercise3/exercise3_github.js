class repo {
    constructor(name, author){
        this.name = name,
        this.author = author,
        this.languaje = "",
        this.numberOfCommits = 0,
        this.stars = 0,
        this.forks = 0,
        this.issues_open = 10,
        this.issues_close = 10
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }

    set setLanguaje(languaje){
        this.languaje = languaje
    }

    set setNumberOfCommits(nCommits){
        this.numberOfCommits = nCommits
    }

    set setStars(nStars){
        this.stars = nStars
    }

    set setForks(nForks){
        this.forks = nForks
    }

    set setIssuesOpen(nIssuesOpen){
        this.issues_open = nIssuesOpen
    }

    set setIssuesClose(nIssuesClose){
        this.issues_close = nIssuesClose
    }
}

myRepo = new repo("Playbook", "Gera097")
myRepo.setLanguaje = "JavaScript"
myRepo.setNumberOfCommits= 100
myRepo.setStars = 200
myRepo.setForks = 500
myRepo.setIssuesOpen = 5
myRepo.setIssuesClose = 26


console.log(myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())