import{a as m,u as g}from"./styled-components.browser.esm-e560ec01.js";import{r as l}from"./index-76fb7be0.js";import{t as r}from"./themes-1bf28143.js";import"./_commonjsHelpers-de833af9.js";function n({type:e,mode:a,placeholder:i,onChange:u}){const[d,o]=l.useState([]);return l.useEffect(()=>{switch(a){case"blue":o([r.colors.white,r.colors.primary]);return;case"red":o([r.colors.white,r.colors.warning]);return;case"gray":o([r.colors.white,r.colors.black300]);return;case"gray2":o([r.colors.black100,r.colors.black300]);return;default:o([r.colors.white,r.colors.primary])}},[a]),m(y,{$color:d,type:e,onChange:u,placeholder:i})}const y=g.input`
  border: 1px solid ${({$color:e})=>e[1]};
  caret-color: ${({$color:e})=>e[1]};
  background-color: ${({$color:e})=>e[0]};

  width: 358px;
  height: 48px;
  color: #1C1C1E;
  font-size: 0.874rem;
  font-weight: 400;
  border-radius: 8px;
  padding: 17px 0 17px 12px;
  outline: none;

  &::placeholder {
    color: #B3B4B9;
  }
`;try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const C={title:"BasicStyle/Input",component:n,tags:["autodocs"]},t={args:{type:"text",mode:"blue",placeholder:"타이틀",onChange:e=>console.log(e.target.value)},argTypes:{mode:{options:["blue","red","gray","gray2"],control:{type:"radio"}}}};var s,c,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'text',
    mode: 'blue',
    placeholder: '타이틀',
    // eslint-disable-next-line no-console
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)
  },
  argTypes: {
    mode: {
      options: ['blue', 'red', 'gray', 'gray2'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Primary"];export{t as Primary,_ as __namedExportsOrder,C as default};
