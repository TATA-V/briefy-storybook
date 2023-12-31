import{a as y,u as f}from"./styled-components.browser.esm-e560ec01.js";import{r as l}from"./index-76fb7be0.js";import{t as e}from"./themes-1bf28143.js";import"./_commonjsHelpers-de833af9.js";function n({title:t,size:i,mode:s,onClick:p}){const[m,r]=l.useState([]),[b,o]=l.useState("");return l.useEffect(()=>{switch(s){case"lineBlue":r([e.colors.white,e.colors.primary,e.colors.primary]);return;case"lineBlack":r([e.colors.white,e.colors.black900,e.colors.black900]);return;case"blue":r([e.colors.primary,e.colors.white,e.colors.primary]);return;case"black":r([e.colors.black900,e.colors.white,e.colors.black900]);return;case"disabled":r([e.colors.black100,e.colors.black300,e.colors.black300]);return;default:r([e.colors.white,e.colors.primary,e.colors.primary])}},[s]),l.useEffect(()=>{switch(i){case"big":o("358px");return;case"middle":o("280px");return;case"small":o("160px");return;case"extraSmall":o("131px");return;default:o("358px")}},[i]),y(g,{$width:b,$color:m,onClick:p,children:t})}const g=f.button`
  background-color: ${({$color:t})=>t[0]};
  color: ${({$color:t})=>t[1]};
  border: 1px solid ${({$color:t})=>t[2]};

  &:hover {
    opacity: 0.8;
  }
  width: ${({$width:t})=>t};
  height: 48px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  flex: 1;
  justify-content: center;
  align-items: center;
`;try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const w={title:"BasicStyle/Button",component:n,tags:["autodocs"]},a={args:{title:"button",size:"big",mode:"lineBlue",onClick:()=>alert("클릭!")},argTypes:{mode:{options:["lineBlue","lineBlack","blue","black","disabled"],control:{type:"radio"}},size:{options:["big","middle","small","extraSmall"],control:{type:"radio"}}}};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'button',
    size: 'big',
    mode: 'lineBlue',
    onClick: () => alert('클릭!')
  },
  argTypes: {
    mode: {
      options: ['lineBlue', 'lineBlack', 'blue', 'black', 'disabled'],
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["Primary"];export{a as Primary,_ as __namedExportsOrder,w as default};
