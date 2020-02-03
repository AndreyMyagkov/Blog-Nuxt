<template>

    <div class="control">
        <label>
            <slot/>
        </label>

        <div class="editor__labels">
            <label class="editor__label"><input type="radio" v-model="type" value="html" class="editor__radio">HTML</label>
            <label class="editor__label"><input type="radio" v-model="type" value="md" class="editor__radio">MD</label>
        </div>

        <div class="edotor">
            <div class="editor__src">

                <codemirror
                    :value="value"
                    @change="textChange"
                    v-if="type==='html'"
                >
                </codemirror>

                <textarea
                    v-else
                    v-model="markdown"
                    @input="textChange(markdown)"
                    class="editor__md">
                </textarea>
            </div>

            <div v-html="value" class="editor__preview"></div>

        </div>

    </div>
    
</template>

<script>
import marked from 'marked'
import html2md from 'html-to-markdown'
export default {

    props: {
        value: {
            type: String,
            default: ''
        }

    },
    data() {
		return {
			type: 'html',
			markdown: ''
    	}
    },
    watch: {
		type(val) {
			if (val==='md') {
				this.markdown =  html2md.convert(this.value);
			}
		}
	},
    methods: {
        textChange: function (text) {

          if (this.type==='md') {
              text = marked(text, {headerIds: false})
          }
			
            this.$emit('input', text)
        }
    },
}
</script>

<style lang="scss">
.vue-codemirror-wrap {height: 100%}
.CodeMirror {
    min-height: 100%;
}

.editor__labels {
    margin-bottom: 12px;
}
.editor__radio {
    width: auto;
    margin-right: 4px;
    margin-bottom: 0;
}
.editor__label {
    display: inline-block;
    margin-right: 12px;
}

.edotor {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border:solid 1px #ccc
}

.editor__src {
    width: 49%;
}

.editor__preview {
    width: 49%;
    background-color: #fff;
    padding: 12px;
}
.editor__md {
    border-radius: 0;
    border: none;
    width: 100%;
    height: 100%;
    min-height: 14em;
    padding: 12px;
}
.editor__preview {
    h1 {
        font-size: 26px;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 22px;
        margin-bottom: 18px;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 14px;
    }

    ul, ol {
        margin-bottom: .8rem;
        padding-top: .16rem;
        list-style-position: inside;
    }

    ul, ul li {
        list-style-type: disc;
    }
    ol, ol li {
        list-style-type: decimal;
    }
}

</style>