$(document).ready(function() {
    if (ace === undefined || ace.edit === undefined) {
        return;
    }
    ace.define('ace/mode/ballerina',
    ['require', 'exports', 'module'], (acequire, exports, module) => {

        const oop = acequire('ace/lib/oop');
        const JavaScriptMode = acequire('ace/mode/javascript').Mode;
        const TextHighlightRules = acequire('ace/mode/text_highlight_rules').TextHighlightRules;

        const BallerinaHighlightRules = function () {
            const keywordMapper = this.createKeywordMapper({
                'ballerina-keyword-control': 'if|else|iterator|try|catch|finally|fork|join|while|throw|throws|' +
                'return|break|timeout|transaction|aborted|abort|committed|failed|retry|next|bind|with',
                'ballerina-keyword-other': 'import|version|public|attach|as',
                'ballerina-keyword-primitive-type': 'boolean|int|float|string|var|any',
                'ballerina-keyword-non-primitive-type': 'message|map|exception|json|xml|xmlDocument|xmlns|error',
                'ballerina-keyword-definition': 'annotation|package|type|connector|function|resource|' +
                'service|action|worker|struct|transformer|endpoint',
                'ballerina-keyword-language': 'const|true|false|reply|create|parameter',
            }, 'ballerina-identifier');

            this.$rules = {
                start: [
                    { token: 'comment', regex: /^\s*(\/\/).*$/ },
                    { token: 'ballerina-xml-json', regex: '[`](?:(?:\\\\.)|(?:[^`\\\\]))*?[`]' },
                    { token: 'ballerina-strings', regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
                    { token: 'ballerina-numeric', regex: '0[xX][0-9a-fA-F]+\\b' },
                    { token: 'ballerina-numeric', regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b' },
                    { token: 'ballerina-operator', regex: '!|%|\\\\|/|\\*|\\-|\\+|~=|==|=|<>|!=|<=|>=|<|>|&&|\\|\\|' },
                    { token: 'punctuation.operator', regex: '\\?|\\:|\\,|\\;|\\.' },
                    { token: 'paren.lparen', regex: '[[({]' },
                    { token: 'paren.rparen', regex: '[\\])}]' },
                    { token: 'whitespace', regex: '(?:\\s+)' },
                    { token: 'ballerina-annotation', regex: '@[a-zA-Z_$][a-zA-Z0-9_$]*' },
                    { token: 'ballerina-package-reference', regex: '[a-zA-Z_$][a-zA-Z0-9_$]*:' },
                    { token: 'ballerina-import-package-name-part', regex: '(?:(?:\\w+\\.)+\\w+\\s*;)' },
                    { token: keywordMapper, regex: '[a-zA-Z_$][a-zA-Z0-9_$]*\\b' },
                ],
            };
        };
        oop.inherits(BallerinaHighlightRules, TextHighlightRules);

        const BallerinaMode = function () {
            JavaScriptMode.call(this);
            this.HighlightRules = BallerinaHighlightRules;
        };

        // inherit from javascript mode
        oop.inherits(BallerinaMode, JavaScriptMode);

        (function () {
            this.createWorker = function (session) {
                return null;
            };
            this.$id = 'ace/mode/ballerina';
        }).call(BallerinaMode.prototype);

        exports.Mode = BallerinaMode;
    });

    let nextSampleIndex = 1;
    let getNextSampleTextArea = function() {
        return $('#txtSample' + nextSampleIndex);
    }
    let nextSampleTextArea = getNextSampleTextArea();
    while (nextSampleTextArea.length) {
        let balSource = nextSampleTextArea.val();
        let divID = nextSampleTextArea.attr('id');
        let parentDiv = nextSampleTextArea.parent();
        let editorDiv = $('<div id="'+ divID + '" />')
        nextSampleTextArea.remove();
        parentDiv.append(editorDiv);
        let editor = ace.edit(divID);
        editor.setTheme('ace/theme/twilight');
        editor.getSession().setMode('ace/mode/ballerina');
        editor.setDisplayIndentGuides(false);
        editor.setShowPrintMargin(false);
        editor.setFontSize('14px');
        editor.$blockScrolling = Infinity;
        editor.setBehavioursEnabled(true);
        editor.setValue(balSource, -1);
        nextSampleIndex++;
        nextSampleTextArea = getNextSampleTextArea();
    }
});

