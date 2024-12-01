# Get value for versionCode in package.json
VERSION_CODE=$(node -p "require('./package.json').versionCode")

#Get value for version in parameters
NEW_VERSION=$1
OLD_VERSION=$2

echo $OLD_VERSION
echo $NEW_VERSION

# Increment version code
NEW_VERSION_CODE=$((VERSION_CODE+1))

echo "Incrementing version code from $VERSION_CODE to $NEW_VERSION_CODE"
echo "Incrementing version from $OLD_VERSION to $NEW_VERSION"

# Find and replace versionCode for NEW_VERSION_CODE in package.jso
sed -i '' "s/$VERSION_CODE,/$NEW_VERSION_CODE,/g" package.json

# Find and replace version for NEW_VERSION in package.json
sed -i '' "s/$OLD_VERSION/$NEW_VERSION/g" package.json

# Find OLD_VERSION_CODE in android/app/build.gradle and replace with NEW_VERSION_CODE
sed -i '' "s/versionCode $VERSION_CODE/versionCode $NEW_VERSION_CODE/g" android/app/build.gradle

# Find OLD_VERSION_CODE in ios/**/Info.plist and replace with NEW_VERSION_CODE
sed -i '' "s/\\<string\\>$VERSION_CODE\\<\\/string\\>/\\<string\\>$NEW_VERSION_CODE\\<\\/string\\>/g" ios/**/Info.plist
sed -i '' "s/CURRENT_PROJECT_VERSION = $VERSION_CODE;/CURRENT_PROJECT_VERSION = $NEW_VERSION_CODE;/g" ios/TemplateRNMobileApp.xcodeproj/project.pbxproj

# Find OLD_VERSION in build.gradle and replace with NEW_VERSION
echo "Incrementing version from $OLD_VERSION to $NEW_VERSION in build.gradle"
sed -i '' "s/versionName \\'$OLD_VERSION\\'/versionName \\'$NEW_VERSION\\'/g" android/app/build.gradle

#Find OLD_VERSION In project.pbxproj and replace with NEW_VERSION
echo "Incrementing version from $OLD_VERSION to $NEW_VERSION in project.pbxproj"
sed -i '' "s/MARKETING_VERSION = $OLD_VERSION/MARKETING_VERSION = $NEW_VERSION/g" ios/TemplateRNMobileApp.xcodeproj/project.pbxproj

# Find and replace README.md version badge
sed -i '' "s/$OLD_VERSION/$NEW_VERSION/g" README.md

# Find and replace README.md version code badge
sed -i '' "s/$VERSION_CODE/$NEW_VERSION_CODE/g" README.md
