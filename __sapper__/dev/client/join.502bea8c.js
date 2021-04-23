import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, u as onMount, w as globals, a as space, e as element, t as text, G as empty, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop, j as attr_dev, H as set_input_value, o as listen_dev, p as set_data_dev, I as run_all } from './client.f7e1ce61.js';
import { b as build } from './index.2338b834.js';

/* src/routes/join.svelte generated by Svelte v3.37.0 */

const { console: console_1 } = globals;
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
			add_location(label0, file, 61, 8, 968);
			attr_dev(input0, "id", "code");
			attr_dev(input0, "type", "text");
			add_location(input0, file, 61, 41, 1001);
			add_location(br0, file, 61, 94, 1054);
			attr_dev(label1, "for", "name");
			add_location(label1, file, 62, 8, 1067);
			attr_dev(input1, "id", "name");
			attr_dev(input1, "type", "text");
			add_location(input1, file, 62, 41, 1100);
			add_location(br1, file, 62, 96, 1155);
			add_location(button, file, 63, 8, 1168);
			add_location(p, file, 64, 8, 1222);
			add_location(div, file, 60, 4, 953);
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
			add_location(p0, file, 56, 4, 789);
			add_location(p1, file, 57, 4, 827);
			add_location(button, file, 58, 4, 916);
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
			add_location(h1, file, 51, 0, 755);
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

	socket.on("gived_star", () => {
		console.log("star given");
	});

	const writable_props = ["joined"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Join> was created with unknown prop '${key}'`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi41MDJiZWE4Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9qb2luLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkpvaW48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gICAgaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oKTtcblxuICAgIGV4cG9ydCB2YXIgam9pbmVkID0gZmFsc2U7XG4gICAgdmFyIGVyck1lc3NhZ2UgPSAnJztcblxuICAgIGxldCBmb3JtID0ge1xuICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgbmFtZTogJydcbiAgICB9XG5cbiAgICBvbk1vdW50KCgpPT57XG4gICAgICAgIHNvY2tldC5lbWl0KCdIZWxsbyEnKTtcbiAgICB9KVxuXG5cblxuICAgIFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSm9pbigpe1xuICAgICAgICBzb2NrZXQuZW1pdCgnam9pbicsIHtcbiAgICAgICAgICAgIGNvZGU6IGZvcm0uY29kZSxcbiAgICAgICAgICAgIG5hbWU6IGZvcm0ubmFtZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNvY2tldC5vbignam9pbl9yZXNwb25zZScsIChkYXRhKT0+e1xuICAgICAgICBpZihkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBlcnJNZXNzYWdlID0gZGF0YS5lcnI7IFxuICAgICAgICB9XG4gICAgfSlcbiAgICBzb2NrZXQub24oJ2dpdmVkX3N0YXInLCAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXIgZ2l2ZW5cIik7XG4gICAgfSlcbiAgICBcblxuXG48L3NjcmlwdD5cblxuXG5cblxuPGgxPkpvaW48L2gxPlxuXG5cblxueyNpZiBqb2luZWR9XG4gICAgPHA+WW91IGhhdmUgam9pbmVkIHRoZSBjbGFzcyE8L3A+XG4gICAgPHA+Q29ubmVjdCB5b3VyIFZpcnR1YWwgQm94IHZpYSB1c2IgdG8gdGhlIGNvbXB1dGVyIGFuZCB0aGVuIGNsaWNrIGNvbm5lY3QgYmVsb3c8L3A+XG4gICAgPGJ1dHRvbj5Db25uZWN0PC9idXR0b24+XG57OmVsc2V9XG4gICAgPGRpdiA+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb2RlXCI+Q29kZTogIDwvbGFiZWw+PGlucHV0IGJpbmQ6dmFsdWU9e2Zvcm0uY29kZX0gaWQ9XCJjb2RlXCIgdHlwZT1cInRleHRcIj4gPGJyPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6ICA8L2xhYmVsPjxpbnB1dCAgYmluZDp2YWx1ZT17Zm9ybS5uYW1lfSBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiPiAgPGJyPlxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVKb2lufSA+Sm9pbjwvYnV0dG9uPiBcbiAgICAgICAgPHA+e2Vyck1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2Plxuey9pZn1cbiJdLCJuYW1lcyI6WyJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBZ0VZLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUFWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FIc0MsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7b0NBQ1IsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7O2dEQUM1QyxHQUFVOzs7Ozs7O3VEQUZ3QixHQUFJLElBQUMsSUFBSTtxQ0FBVCxHQUFJLElBQUMsSUFBSTs7O3VEQUNSLEdBQUksSUFBQyxJQUFJO3FDQUFULEdBQUksSUFBQyxJQUFJOzs7aUVBRTFELEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQVRqQixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWhERCxNQUFNLEdBQUdBLEtBQUU7T0FFTixNQUFNLEdBQUcsS0FBSztLQUNyQixVQUFVLEdBQUcsRUFBRTtLQUVmLElBQUksS0FDSixJQUFJLEVBQUUsRUFBRSxFQUNSLElBQUksRUFBRSxFQUFFOztDQUdaLE9BQU87RUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7OztVQU9mLFVBQVU7RUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7OztDQUl2QixNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRyxJQUFJO01BQ3pCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTttQkFDbkIsTUFBTSxHQUFHLElBQUk7O21CQUdiLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRzs7OztDQUc3QixNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVk7RUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZOzs7Ozs7Ozs7O0VBb0I0QixJQUFJLENBQUMsSUFBSTs7Ozs7RUFDUixJQUFJLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
