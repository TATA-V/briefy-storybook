import{j as a,a as r,u as n}from"./styled-components.browser.esm-91a9bef8.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function o(e){const{data:u,mode:t,onClick:d}=e,{category:l,title:g,src:m,percent:h}=u;return a(x,{$mode:t,children:[a(b,{onClick:d,$percent:h,$mode:t,children:[r("div",{className:"image-box",children:r("img",{className:"image",src:m,alt:"article-img",loading:"lazy"})}),t==="reading"&&r("div",{className:"progress-box",children:r("div",{className:"progress-bar"})})]}),a("div",{className:"content-box",children:[a("p",{className:"category",children:[l[0],r("span",{className:"text-line",children:"|"}),l[1]]}),r("h3",{onClick:d,className:"title",children:g}),r("p",{className:"date",children:"11월 4일"})]}),t==="read"&&r(C,{})]})}const x=n.li`
  width: 100%;
  height: 393px;
  padding: 17px 17px 16px 17px;
  border: 1px solid var(--black-300);
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .category {
    color: var(--black-500);
    font-size: 0.875rem;
    font-weight: 300;
    padding: 12px 0 2px 0;
    line-height: 1.25rem;
  }
  .text-line {
    color: var(--black-300);
    padding: 0 8px;
  }

  .title {
    width: 100%;
    color: ${({$mode:e})=>e==="read"?"var(--black-500)":"var(--black-900)"};
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    cursor: pointer;
    
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    height: 2.75rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .date {
    color: var(--black-500);
    font-size: 0.875rem;
    font-weight: 300;
    padding-top: 14px;
  }

  .content-box {
    width: 100%;
    padding: 0px 6px 0 6px;
  }

  @media all and (max-width: 767px) {
    height: 312px;
    padding: 12px;
    border-radius: 12px;
    .category {
      padding-top: 10px;
    }
    .date {
      padding-top: 8px;
    }
    .content-box {
      padding: 0px 4px 0 4px;
    }
  }
`,b=n.div`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  .image-box {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    opacity: ${({$mode:e})=>e==="read"?"75%":"100%"};
    &:hover {
      transform: scale(1.1);
    }
  }
  
  .progress-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8px;
    background-color: rgba(228, 229, 234, .6);
  }
  .progress-bar {
    width: ${({$percent:e})=>e||"0"};
    height: 8px;
    background-color: var(--primary)
  }

  @media all and (max-width: 767px) {
    height: 184px;
    border-radius: 10px;
  }
`,C=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 19px;
  background-color: rgba(0, 0, 0, 0.08);
`;try{o.displayName="ArticleCard",o.__docgenInfo={description:"",displayName:"ArticleCard",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ category: string[]; title: string; src: string; percent?: string | undefined; }"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const v={title:"CardStyle/ArticleCard",component:o,tags:["autodocs"]},i={args:{data:{category:["뉴닉","경제"],title:"이스라엘-팔레스타인 하마스 전쟁 (8) : 지상편과 휴전",src:"https://ifh.cc/g/t5Z7ol.jpg",percent:"75%"},mode:"unread",onClick:()=>alert("클릭!")},argTypes:{mode:{options:["unread","reading","read"],control:{type:"radio"}}}};var c,s,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: {
      category: ['뉴닉', '경제'],
      title: '이스라엘-팔레스타인 하마스 전쟁 (8) : 지상편과 휴전',
      src: 'https://ifh.cc/g/t5Z7ol.jpg',
      percent: '75%'
    },
    mode: 'unread',
    onClick: () => alert('클릭!')
  },
  argTypes: {
    mode: {
      options: ['unread', 'reading', 'read'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const k=["Primary"];export{i as Primary,k as __namedExportsOrder,v as default};
