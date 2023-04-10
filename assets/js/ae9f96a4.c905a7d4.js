"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),y=n,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},7470:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"CLI to Push Repository to Docassemble"},l=void 0,i={unversionedId:"guides/setting-up/05-00-powershell-cli",id:"guides/setting-up/05-00-powershell-cli",title:"CLI to Push Repository to Docassemble",description:"Setting up PowerShell for pushing code to Projects",source:"@site/docs/guides/setting-up/05-00-powershell-cli.mdx",sourceDirName:"guides/setting-up",slug:"/guides/setting-up/05-00-powershell-cli",permalink:"/Digital-Law-Lab/guides/setting-up/05-00-powershell-cli",draft:!1,tags:[],version:"current",lastUpdatedBy:"Mark Ferraretto",lastUpdatedAt:1679569799,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"CLI to Push Repository to Docassemble"},sidebar:"guidesSidebar",previous:{title:"Clone Repositories",permalink:"/Digital-Law-Lab/guides/setting-up/04-00-clone-repositories"},next:{title:"Digital Law Lab Resources",permalink:"/Digital-Law-Lab/guides/digital-law-lab-resources"}},s={},c=[{value:"Setting up PowerShell for pushing code to Projects",id:"setting-up-powershell-for-pushing-code-to-projects",level:3},{value:"Execution Policy",id:"execution-policy",level:4},{value:"Add an alias to your profile",id:"add-an-alias-to-your-profile",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"setting-up-powershell-for-pushing-code-to-projects"},"Setting up PowerShell for pushing code to Projects"),(0,n.kt)("p",null,"We're all coding on Windows 10.  We use PowerShell to help out with pushing code back and forwards.  "),(0,n.kt)("h4",{id:"execution-policy"},"Execution Policy"),(0,n.kt)("p",null,"First, you need to allow the execution of PowerShell commands (which is not enabled by default).  You do this by setting the Execution Policy. Type this at a PowerShell prompt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\n")),(0,n.kt)("p",null,"You only need to do this once."),(0,n.kt)("h4",{id:"add-an-alias-to-your-profile"},"Add an alias to your profile"),(0,n.kt)("p",null,"Next, you need to edit your PowerShell profile and add some ",(0,n.kt)("inlineCode",{parentName:"p"},"function()"),"s to help you with pushing your code to Docassemble.  You'll need to add a function for every Docassemble repo you clone (There are smarter ways to do this but I'm too lazy to figure them out!)"),(0,n.kt)("p",null,"Edit your PowerShell Profile"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"> code $profile\n")),(0,n.kt)("p",null,"Add this code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$Software = "$home\\Software"         # Assumes you created your Software directory in your home directory\n$Secrets  = "$Software\\secrets.json" # We assume you keep your API key in secrets.json in your Software directory\n$MySecret = "dll_api_key"            # Change this to be whatever you called your API key when you set up your secrets.json\n$DLL = "$Software\\Digtal-Law-Lab" \n$PlaygroundManager = "$DLL\\docassemble_playground_manager.py"\n\nfunction pushPackageName {\n  # This function will push the code in the docassemble-PackageName repo into the \n  # PackageName project in Docassemble.  We\'ll run this each time we want to run and/or\n  # test the code.\n  #\n  # We need to create one of these functions for each docassemble package we work on. It\'s\n  # a bit cumbersome but it\'s easy to understand.  When you copy this function for a new package\n  # you will need to change:\n  # - the name of the function (above)\n  # - the value for $DAPackage (below)\n\n  $DAPackage = "PackageName"\n  $Repo = "$Software\\docassemble-$DAPackage"\n  py.exe $PlaygroundManager --secrets_file $Secrets --secret $MySecret --push --project $DAPackage --package $Repo\n}\n')),(0,n.kt)("p",null,"Save and exit. "),(0,n.kt)("p",null,"Now, you need to reload your profile.  Do this from the command line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"> . $profile\n")),(0,n.kt)("p",null,"(yes, a full-stop, a space and then ",(0,n.kt)("inlineCode",{parentName:"p"},"$profile"),".  That's how you reload your profile)"))}d.isMDXComponent=!0}}]);