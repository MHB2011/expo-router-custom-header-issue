TITLE: Issue with custom header in nested Stack navigator

I have a folder strusture like this:

```
src/
  app/
    (app)/
      _layout.tsx
      index.tsx (App layout)
      (auxiliary)/some-feature/
        index.tsx
    _layout.tsx (Root layout)
```

In the Root layout i return the Stack navigator with a custom header like this:

```
<Stack
  initialRouteName="(app)/index"
  screenOptions={{
    header: (props) => <Header {...props} />,
  }}
/>
```

In the App layout i return the Slot component like this:

```
return <Slot />;
```

In the `(app)/index.tsx` i modify the Screen options like this:

```
<Stack.Screen
  options={{
    headerTitle: () => <Logo size={85} />,
  }}
/>
```

The issue is that the headerTitle is not being displayed when i navigate to the `(app)/index` screen.
The `headerTitle` becomes undefined. Its probably overriden by the Slot component ?
If i remove `(app)/_layout.tsx` everything works fine.

I have tried defining Screen options inside the `_layout.tsx` but it doesn't work.
