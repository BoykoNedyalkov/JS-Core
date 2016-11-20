function main() {
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return'Post: '+ this.title + '\n'+'Content: ' + this.content;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment)
        }
        toString(){
            let rating = this.likes - this.dislikes;
            let string =  super.toString()+ '\nRating: '+rating;
            if(this.comments.length > 0){
                string += '\n'+'Comments:';
                for(let comment of this.comments){
                  string += '\n' + ' * ' + comment;
                }
            }
            return string.trim();
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views
        }
        view(comment){
            this.views++;
            return this;
        }
        toString(){
            return super.toString()+ `\nViews: ${this.views}`;
        }
    }
     return{Post,SocialMediaPost,BlogPost}
}