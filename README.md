# RNSQLite


Step 1 - Update Gradle Settings (located under Gradle Settings in Project Panel)

// file: android/settings.gradle
...

include ':react-native-sqlite-storage'
project(':react-native-sqlite-storage').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-sqlite-storage/platforms/android') // react-native-sqlite-storage >= 4.0.0
// IMPORTANT: if you are working with a version less than 4.0.0 the project directory is '../node_modules/react-native-sqlite-storage/src/android'


Step 2 - Update app module Gradle Build script (located under Gradle Settings in Project Panel)

// file: android/app/build.gradle
...

dependencies {
    ...
    implementation project(':react-native-sqlite-storage')
}


step 3 - Add SQLite package 
file:// android/app/src/main/java/mainApplication.java
import org.pgsqlite.SQLitePluginPackage;
