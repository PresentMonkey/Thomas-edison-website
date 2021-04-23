import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, u as onMount, G as dataset_dev, a as space, e as element, t as text, H as empty, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop, j as attr_dev, I as set_input_value, o as listen_dev, p as set_data_dev, J as run_all } from './client.5628e4ab.js';
import { b as build } from './index.2338b834.js';

/* src/routes/join.svelte generated by Svelte v3.37.0 */
const file = "src/routes/join.svelte";

// (60:0) {:else}
function create_else_block(ctx) {
	let div;
	let label0;
	let t0;
	let input0;
	let t1;
	let br0;
	let t2;
	let label1;
	let t3;
	let input1;
	let t4;
	let br1;
	let t5;
	let button;
	let t6;
	let t7;
	let p;
	let t8;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			label0 = element("label");
			t0 = text("Code:  ");
			input0 = element("input");
			t1 = space();
			br0 = element("br");
			t2 = space();
			label1 = element("label");
			t3 = text("Name:  ");
			input1 = element("input");
			t4 = space();
			br1 = element("br");
			t5 = space();
			button = element("button");
			t6 = text("Join");
			t7 = space();
			p = element("p");
			t8 = text(/*errMessage*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			label0 = claim_element(div_nodes, "LABEL", { for: true });
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "Code:  ");
			label0_nodes.forEach(detach_dev);
			input0 = claim_element(div_nodes, "INPUT", { id: true, type: true });
			t1 = claim_space(div_nodes);
			br0 = claim_element(div_nodes, "BR", {});
			t2 = claim_space(div_nodes);
			label1 = claim_element(div_nodes, "LABEL", { for: true });
			var label1_nodes = children(label1);
			t3 = claim_text(label1_nodes, "Name:  ");
			label1_nodes.forEach(detach_dev);
			input1 = claim_element(div_nodes, "INPUT", { id: true, type: true });
			t4 = claim_space(div_nodes);
			br1 = claim_element(div_nodes, "BR", {});
			t5 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Join");
			button_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t8 = claim_text(p_nodes, /*errMessage*/ ctx[1]);
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label0, "for", "code");
			add_location(label0, file, 61, 8, 941);
			attr_dev(input0, "id", "code");
			attr_dev(input0, "type", "text");
			add_location(input0, file, 61, 41, 974);
			add_location(br0, file, 61, 94, 1027);
			attr_dev(label1, "for", "name");
			add_location(label1, file, 62, 8, 1040);
			attr_dev(input1, "id", "name");
			attr_dev(input1, "type", "text");
			add_location(input1, file, 62, 41, 1073);
			add_location(br1, file, 62, 96, 1128);
			add_location(button, file, 63, 8, 1141);
			add_location(p, file, 64, 8, 1195);
			add_location(div, file, 60, 4, 926);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, label0);
			append_dev(label0, t0);
			append_dev(div, input0);
			set_input_value(input0, /*form*/ ctx[2].code);
			append_dev(div, t1);
			append_dev(div, br0);
			append_dev(div, t2);
			append_dev(div, label1);
			append_dev(label1, t3);
			append_dev(div, input1);
			set_input_value(input1, /*form*/ ctx[2].name);
			append_dev(div, t4);
			append_dev(div, br1);
			append_dev(div, t5);
			append_dev(div, button);
			append_dev(button, t6);
			append_dev(div, t7);
			append_dev(div, p);
			append_dev(p, t8);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(button, "click", /*handleJoin*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*form*/ 4 && input0.value !== /*form*/ ctx[2].code) {
				set_input_value(input0, /*form*/ ctx[2].code);
			}

			if (dirty & /*form*/ 4 && input1.value !== /*form*/ ctx[2].name) {
				set_input_value(input1, /*form*/ ctx[2].name);
			}

			if (dirty & /*errMessage*/ 2) set_data_dev(t8, /*errMessage*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(60:0) {:else}",
		ctx
	});

	return block;
}

// (56:0) {#if joined}
function create_if_block(ctx) {
	let p0;
	let t0;
	let t1;
	let p1;
	let t2;
	let t3;
	let button;
	let t4;

	const block = {
		c: function create() {
			p0 = element("p");
			t0 = text("You have joined the class!");
			t1 = space();
			p1 = element("p");
			t2 = text("Connect your Virtual Box via usb to the computer and then click connect below");
			t3 = space();
			button = element("button");
			t4 = text("Connect");
			this.h();
		},
		l: function claim(nodes) {
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "You have joined the class!");
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, "Connect your Virtual Box via usb to the computer and then click connect below");
			p1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Connect");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file, 56, 4, 762);
			add_location(p1, file, 57, 4, 800);
			add_location(button, file, 58, 4, 889);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p0, anchor);
			append_dev(p0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t4);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(button);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(56:0) {#if joined}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*joined*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Join");
			t2 = space();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1eu0qkx\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Join");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Join";
			add_location(h1, file, 51, 0, 728);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Join", slots, []);
	const socket = build();
	var { joined = false } = $$props;
	var errMessage = "";
	let form = { code: "", name: "" };

	onMount(() => {
		socket.emit("Hello!");
	});

	function handleJoin() {
		socket.emit("join", { code: form.code, name: form.name });
	}

	socket.on("join_response", data => {
		if (data.success == true) {
			$$invalidate(0, joined = true);
		} else {
			$$invalidate(1, errMessage = data.err);
		}
	});

	const writable_props = ["joined"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Join> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		form.code = this.value;
		$$invalidate(2, form);
	}

	function input1_input_handler() {
		form.name = this.value;
		$$invalidate(2, form);
	}

	$$self.$$set = $$props => {
		if ("joined" in $$props) $$invalidate(0, joined = $$props.joined);
	};

	$$self.$capture_state = () => ({
		onMount,
		io: build,
		dataset_dev,
		socket,
		joined,
		errMessage,
		form,
		handleJoin
	});

	$$self.$inject_state = $$props => {
		if ("joined" in $$props) $$invalidate(0, joined = $$props.joined);
		if ("errMessage" in $$props) $$invalidate(1, errMessage = $$props.errMessage);
		if ("form" in $$props) $$invalidate(2, form = $$props.form);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		joined,
		errMessage,
		form,
		handleJoin,
		input0_input_handler,
		input1_input_handler
	];
}

class Join extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { joined: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Join",
			options,
			id: create_fragment.name
		});
	}

	get joined() {
		throw new Error("<Join>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set joined(value) {
		throw new Error("<Join>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Join;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi41MTdmZWRiOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9qb2luLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkpvaW48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gICAgaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgZGF0YXNldF9kZXYgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG5cbiAgICBjb25zdCBzb2NrZXQgPSBpbygpO1xuXG4gICAgZXhwb3J0IHZhciBqb2luZWQgPSBmYWxzZTtcbiAgICB2YXIgZXJyTWVzc2FnZSA9ICcnO1xuXG4gICAgbGV0IGZvcm0gPSB7XG4gICAgICAgIGNvZGU6ICcnLFxuICAgICAgICBuYW1lOiAnJ1xuICAgIH1cblxuICAgIG9uTW91bnQoKCk9PntcbiAgICAgICAgc29ja2V0LmVtaXQoJ0hlbGxvIScpO1xuICAgIH0pXG5cblxuXG4gICAgXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVKb2luKCl7XG4gICAgICAgIHNvY2tldC5lbWl0KCdqb2luJywge1xuICAgICAgICAgICAgY29kZTogZm9ybS5jb2RlLFxuICAgICAgICAgICAgbmFtZTogZm9ybS5uYW1lXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc29ja2V0Lm9uKCdqb2luX3Jlc3BvbnNlJywgKGRhdGEpPT57XG4gICAgICAgIGlmKGRhdGEuc3VjY2VzcyA9PSB0cnVlKXtcbiAgICAgICAgICAgIGpvaW5lZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGVyck1lc3NhZ2UgPSBkYXRhLmVycjsgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgXG5cblxuPC9zY3JpcHQ+XG5cblxuXG5cbjxoMT5Kb2luPC9oMT5cblxuXG5cbnsjaWYgam9pbmVkfVxuICAgIDxwPllvdSBoYXZlIGpvaW5lZCB0aGUgY2xhc3MhPC9wPlxuICAgIDxwPkNvbm5lY3QgeW91ciBWaXJ0dWFsIEJveCB2aWEgdXNiIHRvIHRoZSBjb21wdXRlciBhbmQgdGhlbiBjbGljayBjb25uZWN0IGJlbG93PC9wPlxuICAgIDxidXR0b24+Q29ubmVjdDwvYnV0dG9uPlxuezplbHNlfVxuICAgIDxkaXYgPlxuICAgICAgICA8bGFiZWwgZm9yPVwiY29kZVwiPkNvZGU6ICA8L2xhYmVsPjxpbnB1dCBiaW5kOnZhbHVlPXtmb3JtLmNvZGV9IGlkPVwiY29kZVwiIHR5cGU9XCJ0ZXh0XCI+IDxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOiAgPC9sYWJlbD48aW5wdXQgIGJpbmQ6dmFsdWU9e2Zvcm0ubmFtZX0gaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIj4gIDxicj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlSm9pbn0gPkpvaW48L2J1dHRvbj4gXG4gICAgICAgIDxwPntlcnJNZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbnsvaWZ9XG4iXSwibmFtZXMiOlsiaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFnRVksR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBQVYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUhzQyxHQUFJLElBQUMsSUFBSTs7Ozs7OztvQ0FDUixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Z0RBQzVDLEdBQVU7Ozs7Ozs7dURBRndCLEdBQUksSUFBQyxJQUFJO3FDQUFULEdBQUksSUFBQyxJQUFJOzs7dURBQ1IsR0FBSSxJQUFDLElBQUk7cUNBQVQsR0FBSSxJQUFDLElBQUk7OztpRUFFMUQsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBVGpCLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BOUNELE1BQU0sR0FBR0EsS0FBRTtPQUVOLE1BQU0sR0FBRyxLQUFLO0tBQ3JCLFVBQVUsR0FBRyxFQUFFO0tBRWYsSUFBSSxLQUNKLElBQUksRUFBRSxFQUFFLEVBQ1IsSUFBSSxFQUFFLEVBQUU7O0NBR1osT0FBTztFQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTs7O1VBT2YsVUFBVTtFQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTs7O0NBSXZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFHLElBQUk7TUFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJO21CQUNuQixNQUFNLEdBQUcsSUFBSTs7bUJBR2IsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7Ozs7Ozs7OztFQXNCMkIsSUFBSSxDQUFDLElBQUk7Ozs7O0VBQ1IsSUFBSSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
