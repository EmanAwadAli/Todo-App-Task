import {
    PlainLocalStorageDriver,
    setCacheConfigurations,
  } from "@mongez/cache";

  const cacheDriver = new PlainLocalStorageDriver
  
   setCacheConfigurations({
    driver: cacheDriver,
  });
  