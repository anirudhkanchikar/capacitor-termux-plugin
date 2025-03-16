// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "TermuxPlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "TermuxPlugin",
            targets: ["TermuxPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "TermuxPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/TermuxPluginPlugin"),
        .testTarget(
            name: "TermuxPluginPluginTests",
            dependencies: ["TermuxPluginPlugin"],
            path: "ios/Tests/TermuxPluginPluginTests")
    ]
)