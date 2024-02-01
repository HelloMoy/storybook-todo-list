import{a,j as i}from"./jsx-runtime-03b4ddbf.js";import{r as k}from"./index-03d05a58.js";import{u as E,a as I,f as B,T as b,P as j,s as S,M as N}from"./TaskList.stories-bb55b515.js";import{r as q}from"./index-76fb7be0.js";import{w,u as L,a as y,e as _}from"./index-c3bd36c8.js";import"./_commonjsHelpers-de833af9.js";import"./Task.stories-303d91df.js";import"./index-8d47fad6.js";var c=k();function v(){const t=E(),{error:e}=I(s=>s.taskbox);return q.useEffect(()=>{t(B())},[]),e?a("div",{className:"page lists-show",children:i("div",{className:"wrapper-message",children:[a("span",{className:"icon-face-sad"}),a("p",{className:"title-message",children:"Oh no!"}),a("p",{className:"subtitle-message",children:"Something went wrong"})]})}):i("div",{className:"page lists-show",children:[a("nav",{children:a("h1",{className:"title-page",children:"Taskbox"})}),a(b,{})]})}v.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};const z={component:v,title:"InboxScreen",decorators:[t=>a(j,{store:S,children:t()})],tags:["autodocs"]},n={parameters:{msw:{handlers:[c.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,e,s)=>e(s.json(N.tasks)))]}},play:async({canvasElement:t})=>{const e=w(t),s=L.setup();await y(await e.findByTestId("loading")),await s.click(e.getByLabelText("pinTask-1")),await s.click(e.getByLabelText("pinTask-3"))}},r={parameters:{msw:{handlers:[c.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,e,s)=>e(s.json([])))]}},play:async({canvasElement:t})=>{const e=w(t),s=await e.findByTestId(/loading/i);await y(s);const f=e.getByText(/You have no tasks/i);_(f).toBeInTheDocument()}},o={parameters:{msw:{handlers:[c.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,e,s)=>e(s.status(403)))]}}};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Simulates pinning the first task
    await user.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await user.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, cxt) => {
        return res(cxt.json([]));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loadingText = await canvas.findByTestId(/loading/i);
    await waitForElementToBeRemoved(loadingText);
    const noTasksTextElement = canvas.getByText(/You have no tasks/i);
    expect(noTasksTextElement).toBeInTheDocument();
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const A=["Default","Empty","Error"];export{n as Default,r as Empty,o as Error,A as __namedExportsOrder,z as default};
