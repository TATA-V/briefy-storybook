import{a as g,F as x,j as k,u as B}from"./styled-components.browser.esm-91a9bef8.js";import{r as a}from"./index-76fb7be0.js";import{t as e}from"./themes-1bf28143.js";import"./_commonjsHelpers-de833af9.js";function i({title:r,size:t,mode:l,onClick:u,fontSize:d="0.875rem",mobileHeight:m="32px",hasBorder:p=!0,children:b}){const[y,$]=a.useState(!1),f=a.useMemo(()=>{switch(l){case"lineBlue":return[e.colors.white,e.colors.primary,e.colors.primary];case"lineBlack":return[e.colors.white,e.colors.black900,e.colors.black900];case"blue":return[e.colors.primary,e.colors.white,e.colors.primary];case"black":return[e.colors.black900,e.colors.white,e.colors.black900];case"disabled":return[e.colors.black100,e.colors.black300,e.colors.black300];default:return[e.colors.white,e.colors.primary,e.colors.primary]}},[l]),h=a.useMemo(()=>{switch(t){case"big":return"358px";case"middle":return"280px";case"small":return"160px";case"extraSmall":return"131px";default:return"358px"}},[t]);return g(x,{children:y&&k(w,{disabled:l==="disabled",$width:h,$color:f,$fontSize:d,$mobileHeight:m,$hasBorder:p,onClick:u,children:[r,b]})})}const w=B.button`
  background-color: ${({$color:r})=>r[0]};
  color: ${({$color:r})=>r[1]};
  border: ${({$hasBorder:r,$color:t})=>r?`1px solid ${t[2]}`:null};

  &:hover {
    opacity: 0.8;
  }
  width: ${({$width:r})=>r};
  height: 48px;
  font-size: ${({$fontSize:r})=>r};
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 767px) {
    width: 100%; 
    height: ${({$mobileHeight:r})=>r};
    font-size: 0.875rem;
  }
`;try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},fontSize:{defaultValue:{value:"0.875rem"},description:"",name:"fontSize",required:!1,type:{name:"string"}},mobileHeight:{defaultValue:{value:"32px"},description:"",name:"mobileHeight",required:!1,type:{name:"string"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"BasicStyle/Button",component:i,tags:["autodocs"]},o={args:{title:"button",size:"big",mode:"blue",onClick:()=>alert("클릭!")},argTypes:{mode:{options:["lineBlue","lineBlack","lineGray","blue","black","disabled"],control:{type:"radio"}},size:{options:["big","middle","small","extraSmall"],control:{type:"radio"}}}};var n,s,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'button',
    size: 'big',
    mode: 'blue',
    onClick: () => alert('클릭!')
  },
  argTypes: {
    mode: {
      options: ['lineBlue', 'lineBlack', 'lineGray', 'blue', 'black', 'disabled'],
      control: {
        type: 'radio'
      }
    },
    size: {
      options: ['big', 'middle', 'small', 'extraSmall'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const v=["Primary"];export{o as Primary,v as __namedExportsOrder,q as default};
