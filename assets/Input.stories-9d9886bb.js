import{a as y,u as f}from"./styled-components.browser.esm-91a9bef8.js";import{r as l}from"./index-76fb7be0.js";import{t as r}from"./themes-1bf28143.js";import"./_commonjsHelpers-de833af9.js";function n({type:e,mode:a,placeholder:u,onChange:d,value:c,height:m="48px",mobileHeight:g="38px"}){const[h,t]=l.useState([]);return l.useEffect(()=>{switch(a){case"blue":t([r.colors.white,r.colors.primary]);return;case"red":t([r.colors.white,r.colors.warning]);return;case"gray":t([r.colors.white,r.colors.black300]);return;case"gray2":t([r.colors.black100,r.colors.black300]);return;default:t([r.colors.white,r.colors.primary])}},[a]),y(x,{$color:h,$height:m,$mobileHeight:g,type:e,onChange:d,placeholder:u,disabled:a==="gray2",value:c})}const x=f.input`
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
`;try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},height:{defaultValue:{value:"48px"},description:"",name:"height",required:!1,type:{name:"string"}},mobileHeight:{defaultValue:{value:"38px"},description:"",name:"mobileHeight",required:!1,type:{name:"string"}}}}}catch{}const I={title:"BasicStyle/Input",component:n,tags:["autodocs"]},o={args:{type:"text",mode:"blue",placeholder:"타이틀"},argTypes:{mode:{options:["blue","red","gray","gray2"],control:{type:"radio"}}}};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const v=["Primary"];export{o as Primary,v as __namedExportsOrder,I as default};
