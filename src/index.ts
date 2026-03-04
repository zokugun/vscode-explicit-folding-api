export const explicitFoldingExtensionId = 'zokugun.explicit-folding';

export type ExplicitFoldingHub = {
	registerFoldingRules(language: string, rules: ExplicitFoldingConfig[]): void;
	unregisterFoldingRules(language: string): void;
};

type FoldLastLineProperty = { foldLastLine?: boolean | string; foldLastLineRegex: undefined } | { foldLastLine: undefined; foldLastLineRegex: string };

export type ExplicitFoldingConfig = {
	begin?: string;
	middle?: string;
	end?: string;
	beginRegex?: string;
	middleRegex?: string;
	endRegex?: string;
	continuation?: string;
	continuationRegex?: string;
	separator?: string;
	separatorRegex?: string;
	while?: string;
	whileRegex?: string;

	// common options
	bypassProtection?: boolean;
	kind?: 'comment' | 'region';

	// autofold options
	autoFold?: boolean;

	// begin/end options
	consumeEnd?: boolean | boolean[];
	name?: string;

	// folding options
	foldBOF?: boolean;
	foldEOF?: boolean;
	foldBeforeFirstLine?: boolean;

	// nested options
	descendants?: ExplicitFoldingConfig[];
	nested?: boolean | ExplicitFoldingConfig[];
	strict?: boolean | string;

	// indentation rule
	indentation?: boolean;
	offSide?: boolean;

	// include rule
	include?: string | string[];
} & FoldLastLineProperty;
