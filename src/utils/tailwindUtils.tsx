type Themes = 'default' | 'disabled';

const themeRecord: Record<Themes, string> = {
	default: 'bg-gray-800 hover:bg-gray-900 focus:bg-gray-700',
	disabled: 'pointer-events-none bg-gray-300',
};

const fontRecord: Record<Themes, string> = {
	default: 'font-bold text-gray-100',
	disabled: 'font-bold text-gray-800',
};

type Section = 'padding: 6rem 0 2rem';
