// Modelacion de Iformación Issue
// Issue
/*
+title
+repositoryNameAssociated
+status
+numberOfComments
+labels
+author
+dateCreated
+lastUpdated
+getTitleAndAuthor()
+getGeneralInfo(

*/

const issue = {
    title: '06 Live 3 semana 2',
    repositoryName: 'MissionNodeJS',
    repositoryStatus: 'opened',
    numberofcomments: 33,
    labels: 0, 
    author: 'carlogilmar',
    dateCreated:'Juves 14 de Abril',
    lastupdate: '4 days ago',
    
    getTitleAndAuthor : function(){
        return `the title is ${this.title} and the author is ${this.author}`

    },
    getGeneralInfo: function(){
       return `This repository was created ${this.dateCreated}` 
    }


}
console.log(issue.getGeneralInfo())
console.log(issue.getTitleAndAuthor())
