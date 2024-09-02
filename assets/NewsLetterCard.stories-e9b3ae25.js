import{j as o,a as e,u as i}from"./styled-components.browser.esm-91a9bef8.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function r({src:a,title:u,category:c,description:p,onClick:n}){return o(m,{children:[e(C,{onClick:n,children:e("img",{src:a,alt:"news-img",loading:"lazy"})}),o(h,{onClick:n,children:[e("h3",{className:"title",children:u}),e("p",{className:"category",children:c}),e("p",{className:"description",children:p})]})]})}const m=i.div`
  width: 100%;
  height: 156px;
  border-radius: 20px;
  border: 1px solid var(--black-300);
  padding: 16px;
  display: flex;
  align-items: center;

  @media all and (max-width: 767px) {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    padding: 10px;
  }
`,C=i.div`
  min-width: 124px;
  height: 124px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  img {
    min-width: 124px;
    height: 124px;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media all and (max-width: 767px) {
    min-width: 80px;
    height: 80px;
    border-radius: 8px;
    img {
      min-width: 80px;
      height: 80px;
    }
  }
`,h=i.div`
  width: 100%;
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

  @media all and (max-width: 767px) {
    width: 100%;
    padding-left: 8px;
    .title {
      font-size: 0.875rem;
    }
    .category {
      font-size: 0.75rem;
      margin: 0px 0 5px 0;
    }
    .description {
      height: 32px;
      line-height: 1rem;
      font-size: 0.7rem;
    }
  }
`;try{r.displayName="NewsLetterCard",r.__docgenInfo={description:"",displayName:"NewsLetterCard",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const f={title:"CardStyle/NewsLetterCard",component:r,tags:["autodocs"]},t={args:{src:"https://nabxomdrieosmaactvvc.supabase.co/storage/v1/object/public/briefy/snow.jpeg",title:"뉴닉",category:"경제",description:"시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요",onClick:()=>alert("클릭!")}};var s,d,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    src: 'https://nabxomdrieosmaactvvc.supabase.co/storage/v1/object/public/briefy/snow.jpeg',
    title: '뉴닉',
    category: '경제',
    description: '시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요',
    onClick: () => alert('클릭!')
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const b=["Primary"];export{t as Primary,b as __namedExportsOrder,f as default};
