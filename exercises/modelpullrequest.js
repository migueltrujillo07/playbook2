// Modelar la informacion del pull Request de Git Ejercicio de la Mission Back-End
/*title
+branchName
+dateCreated
+status
+repositoryNameAssociated
+getStatus()
+getTitleAndAutor()
 *
 */
const pullrequest = {
    brachName : 'Mastes',
    dateCreated: '11 de abril del 2020',
    repositorystatus: 'Activo',
    repositorynameasoociated: 'my_lauchx_blog',
    getstatus: function(){
        return `El estatus de es ${this.repositorystatus}`
    },
    gettitle: function(){
        return `el titulo del brach es ${this.brachName}`
    }

}
console.log(pullrequest.getstatus())
console.log(pullrequest.gettitle())
