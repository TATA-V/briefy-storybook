import{a as B,F as w,j as S,u as $}from"./styled-components.browser.esm-91a9bef8.js";import{r as a}from"./index-76fb7be0.js";import{t as e}from"./themes-1bf28143.js";import"./_commonjsHelpers-de833af9.js";function n({title:r,size:l,mode:s,onClick:p,fontSize:m="0.875rem",mobileHeight:b="32px",hasBorder:y=!0,children:f}){const[h,t]=a.useState([]),[g,o]=a.useState(""),[k,x]=a.useState(!1);return a.useEffect(()=>{switch(s){case"lineBlue":t([e.colors.white,e.colors.primary,e.colors.primary]);break;case"lineBlack":t([e.colors.white,e.colors.black900,e.colors.black900]);break;case"lineGray":t([e.colors.white,e.colors.black500,e.colors.black500]);break;case"blue":t([e.colors.primary,e.colors.white,e.colors.primary]);break;case"black":t([e.colors.black900,e.colors.white,e.colors.black900]);break;case"disabled":t([e.colors.black100,e.colors.black300,e.colors.black300]);break;default:t([e.colors.white,e.colors.primary,e.colors.primary])}x(!0)},[s]),a.useEffect(()=>{switch(l){case"big":o("358px");return;case"middle":o("280px");return;case"small":o("160px");return;case"extraSmall":o("131px");return;default:o("358px")}},[l]),B(w,{children:k&&S(_,{disabled:s==="disabled",$width:g,$color:h,$fontSize:m,$mobileHeight:b,$hasBorder:y,onClick:p,children:[r,f]})})}const _=$.button`
  background-color: ${({$color:r})=>r[0]};
  color: ${({$color:r})=>r[1]};
  border: ${({$hasBorder:r,$color:l})=>r?`1px solid ${l[2]}`:null};

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
`;try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},fontSize:{defaultValue:{value:"0.875rem"},description:"",name:"fontSize",required:!1,type:{name:"string"}},mobileHeight:{defaultValue:{value:"32px"},description:"",name:"mobileHeight",required:!1,type:{name:"string"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"BasicStyle/Button",component:n,tags:["autodocs"]},i={args:{title:"button",size:"big",mode:"blue",onClick:()=>alert("클릭!")},argTypes:{mode:{options:["lineBlue","lineBlack","lineGray","blue","black","disabled"],control:{type:"radio"}},size:{options:["big","middle","small","extraSmall"],control:{type:"radio"}}}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Primary"];export{i as Primary,j as __namedExportsOrder,C as default};
