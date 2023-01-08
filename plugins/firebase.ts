import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import store, { getAppStoreModule } from '~/store-modules';

export default async function<Nuxt, Plugin>(): Promise<void> {
    const appStore = getAppStoreModule(store);
    const firebaseConfig = {
        apiKey: appStore.env.fb_apiKey,
        authDomain: appStore.env.fb_authDomain,
        projectId: appStore.env.fb_projectId,
        storageBucket: appStore.env.fb_storageBucket,
        messagingSenderId: appStore.env.fb_messagingSenderId,
        appId: appStore.env.fb_appId,
        measurementId: appStore.env.fb_measurementId
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}
