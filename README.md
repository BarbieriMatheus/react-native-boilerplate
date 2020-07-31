# react-native-boilerplate

# Welcome to Bolierplate
Hi! This is a project to **facilitate the creation of a react native application**. We implement the following technologies: **TypeScript, ESLint, Prettier, Styled-Components and Dark Mode.**

## Step by step to create this project from zero

npx react-native init rnBoilerplate **--template react-native-template-typescript**

  

Add code in **tsconfig.json**

	{
		“CompilerOptions”: {
		…
		/* Strict Type-Checking Options */

		"strict": true, /* Enable all strict type-checking options. */
		"noImplicitAny": true, /* Raise error on expressions and declarations with an implied 'any' type. */
		"strictNullChecks": true,  /* Enable strict null checks. */
		"strictFunctionTypes": true, /* Enable strict checking of function types. */
		"strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
		"noImplicitThis": true,  /* Raise error on 'this' expressions with an implied 'any' type. */
		"alwaysStrict": true,  /* Parse in strict mode and emit "use strict" for each source file. */

		/* Additional Checks */
		"noUnusedLocals": true,  /* Report errors on unused locals. */
		"noUnusedParameters": true,  /* Report errors on unused parameters. */
		"noImplicitReturns": true, /* Report error when not all code paths in function return a value. */
		"noFallthroughCasesInSwitch": true,  /* Report errors for fallthrough cases in switch statement. */
		"forceConsistentCasingInFileNames": true,
		}
	}

  

  

yarn add **eslint eslint-config-react-native-wcandillon —dev**


Replace in .**eslintrc**:

	{ extends: "react-native-wcandillon" }

Add code in **package.json**

    {
	    “scripts”: {
		    "lint": "eslint . --ext .ts,.tsx . --max-warnings 0",
			"tsc": "tsc",
			"ci": "yarn lint && yarn tsc"
		}
	}

In **.prettierrc.js**
	
	module.exports = {
		bracketSpacing: true,
		jsxBracketSameLine: true,
		singleQuote: false,
		trailingComma: 'all',
	};

**Install extensions visconde**
>Eslint
>Prettier

 **Command + Shift + P** and write **Open Settings (Json)**
	Add in **settings.json**
		
		"editor.formatOnSave": true,
		"[javascript]": {
			"editor.formatOnSave": true
		}

yarn add **styled-components @types/styled-components**

