export function getLanguage(){
  const appName = navigator.appName;
  if ('Netscape' === appName){
    return decision(navigator.language.toLocaleLowerCase());
  } else {
    return decision(navigator.userLanguage.toLocaleLowerCase());
  }
}

function decision(language){
  if (language.indexOf('cn') > -1){
    return 'zh-CN';
  }
  if (language.indexOf('en') > -1){
    return 'en-US';
  }
}

export function getProtocol(){
  return location.protocol;
}