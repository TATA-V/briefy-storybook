import{a as g,u as h}from"./styled-components.browser.esm-91a9bef8.js";import{r as y}from"./index-76fb7be0.js";import{t as r}from"./themes-1bf28143.js";import"./_commonjsHelpers-de833af9.js";function a({type:e,mode:o,placeholder:s,onChange:p,value:u,height:d="48px",mobileHeight:c="38px"}){const m=y.useMemo(()=>{switch(o){case"blue":return[r.colors.white,r.colors.primary];case"red":return[r.colors.white,r.colors.warning];case"gray":return[r.colors.white,r.colors.black300];case"gray2":return[r.colors.black100,r.colors.black300];default:return[r.colors.white,r.colors.primary]}},[o]);return g(f,{$color:m,$height:d,$mobileHeight:c,type:e,onChange:p,placeholder:s,disabled:o==="gray2",value:u})}const f=h.input`
  border: 1px solid ${({$color:e})=>e[1]};
  caret-color: ${({$color:e})=>e[1]};
  background-color: ${({$color:e})=>e[0]};

  width: 100%;
  height: ${({$height:e})=>e};
  color: #1C1C1E;
  font-size: 0.874rem;
  font-weight: 400;
  border-radius: 8px;
  padding: 17px 0 17px 12px;
  outline: none;

  &::placeholder {
    color: #B3B4B9;
  }

  @media all and (max-width: 767px) {
    height: ${({$mobileHeight:e})=>e} ;
    padding: 0 0 0 12px;
  }
`;try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},height:{defaultValue:{value:"48px"},description:"",name:"height",required:!1,type:{name:"string"}},mobileHeight:{defaultValue:{value:"38px"},description:"",name:"mobileHeight",required:!1,type:{name:"string"}}}}}catch{}const w={title:"BasicStyle/Input",component:a,tags:["autodocs"]},t={args:{type:"text",mode:"blue",placeholder:"타이틀"},argTypes:{mode:{options:["blue","red","gray","gray2"],control:{type:"radio"}}}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'text',
    mode: 'blue',
    placeholder: '타이틀'
    // eslint-disable-next-line no-console
    // onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
  },
  argTypes: {
    mode: {
      options: ['blue', 'red', 'gray', 'gray2'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const I=["Primary"];export{t as Primary,I as __namedExportsOrder,w as default};
