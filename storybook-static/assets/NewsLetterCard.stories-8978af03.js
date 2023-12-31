import{j as n,a as e,u as i}from"./styled-components.browser.esm-e560ec01.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function t({title:a,category:d,description:c,onClick:o}){return n(p,{children:[e(C,{onClick:o,children:e("img",{src:"https://ifh.cc/g/t5Z7ol.jpg",alt:"news-img",loading:"lazy"})}),n(m,{onClick:o,children:[e("h3",{className:"title",children:a}),e("p",{className:"category",children:d}),e("p",{className:"description",children:c})]})]})}const p=i.div`
  width: 384px;
  height: 156px;
  border-radius: 20px;
  border: 1px solid var(--black-300);
  padding: 16px;
  display: flex;
  align-items: center;
`,C=i.div`
  width: 124px;
  height: 124px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 124px;
    height: 124px;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`,m=i.div`
  width: 216px;
  padding-left: 12px;
  cursor: pointer;
  .title {
    color: var(--black-900);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
  }
  .category {
    color: var(--black-700);
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.25rem;
    margin: 2px 0 10px 0;
  }
  .description {
    color: var(--black-500);
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.25rem;

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    height: 2.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;try{t.displayName="NewsLetterCard",t.__docgenInfo={description:"",displayName:"NewsLetterCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const w={title:"CardStyle/NewsLetterCard",component:t,tags:["autodocs"]},r={args:{title:"뉴닉",category:"경제",description:"시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요",onClick:()=>alert("클릭!")}};var s,l,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: '뉴닉',
    category: '경제',
    description: '시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요',
    onClick: () => alert('클릭!')
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const x=["Primary"];export{r as Primary,x as __namedExportsOrder,w as default};
