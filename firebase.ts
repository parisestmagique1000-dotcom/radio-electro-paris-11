
// Remplacer par votre config réelle dans la console Firebase
export const firebaseConfig = {
  apiKey: "AIzaSy-VOTRE_CLE_ICI",
  authDomain: "radio-electro-paris.firebaseapp.com",
  projectId: "radio-electro-paris",
  storageBucket: "radio-electro-paris.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

/**
 * STRUCTURE COLLECTIONS FIRESTORE :
 * 
 * users: { 
 *   uid: { 
 *     role: 'CLUBBER' | 'DJ' | 'HABITUÉ' | 'SUPER_ADMIN', 
 *     displayName: string, 
 *     instagram?: string,
 *     favClubs: string[]
 *   }
 * }
 * 
 * requests: {
 *   id: { userId, type: 'DJ' | 'HABITUÉ', data: {}, status: 'PENDING' | 'APPROVED', timestamp }
 * }
 * 
 * posts: {
 *   id: { type: 'VIDEO' | 'PHOTO', authorId, authorName, url, title, description, club, timestamp }
 * }
 * 
 * RÈGLES DE SÉCURITÉ :
 * match /posts/{postId} {
 *   allow read: if true;
 *   allow create: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['DJ', 'HABITUÉ', 'SUPER_ADMIN'];
 * }
 */
