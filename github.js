class gitHub {
    constructor(){
        this.client_id = "Iv1.45cad220c74bfb43";
        this.client_secret = "5b68941551a1245ecd29a6e4ad749fce96415e92";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}