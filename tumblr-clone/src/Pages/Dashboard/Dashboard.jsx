import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
// import { Layout } from "antd";
import { HeadCard } from "../../Component/HeadCard";
import { PostCard } from "../../Component/PostCard";
import { RecommendedBlogs } from "../../Component/RecommendedBlogs";
import { Radar } from "../../Component/Radar";
import styled from "styled-components";
import { AppContext } from "../../Context/AppContext";
const Layout = styled.div`
  display: flex;
  background: #001935;
`;
const Content = styled.div`
  flex: 2;
`;
const Sider = styled.div`
  flex: 1;
`;
// const {Sider, Content } = Layout;
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.feedCard = this.feedCard.bind(this);
  }

  feedCard() {}
  render() {
    const { user, posts } = this.context;
    console.log(posts);
    return (
      <div>
        <Layout>
          <Content>
            <HeadCard />
            {posts?.map((_, index, a) => (
              <PostCard
                key={index}
                id={a[a.length - 1 - index].id}
                postImgUrl={a[a.length - 1 - index].content}
                username={a[a.length - 1 - index].post_by}
                avatarUrl={a[a.length - 1 - index].src}
                isFollow={a[a.length - 1 - index].isFollow}
                isLike={a[a.length - 1 - index].isLike}
                // onToggle={this.handleToggle}
              />
            ))}  
             
              {/* {posts.filter((item)=>{return item.postType==="image"}).map((item)=>
                 <PostCard
                 id={item.id}
                 postImgUrl={item.content}
                 username={item.post_by}
                 avatarUrl={item.src}
               />
              )} 
              
              {posts.filter((item)=>{return item.postType==="text"}).map((item)=>
                 <TextContentCard
                 id={item.id}
                 postImgUrl={item.content}
                 username={item.post_by}
                 avatarUrl={item.src}
               />
              )}  */}

              {/* {posts?.map((item)=>
                {if(item.postType==="image"){
                  <PostCard
                  id={item.id}
                  postImgUrl={item.content}
                  username={item.post_by}
                  avatarUrl={item.src}
                />
                }
              else{
                <TextContentCard
                id={item.id}
                postImgUrl={item.content}
                username={item.post_by}
                avatarUrl={item.src}
              />
              }}
                
              )}
            
            
            ))} */}
          </Content>
          <Sider>
            <RecommendedBlogs />
            <Radar />
          </Sider>
        </Layout>
      </div>
    );
  }
}
Dashboard.contextType = AppContext;
