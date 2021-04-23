import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.5f779cda.js';

var successkid = "/client/465898c830bb9d2c.jpg";

/* src/routes/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
	let strong;
	let t3;
	let a;
	let t4;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Virtual Box");
			t2 = space();
			p = element("p");
			strong = element("strong");
			t3 = text("Login to create a classroom or click ");
			a = element("a");
			t4 = text("join");
			t5 = text(" to join an existing classroom");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-qzfdu6\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Virtual Box");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			strong = claim_element(p_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t3 = claim_text(strong_nodes, "Login to create a classroom or click ");
			a = claim_element(strong_nodes, "A", { href: true });
			var a_nodes = children(a);
			t4 = claim_text(a_nodes, "join");
			a_nodes.forEach(detach_dev);
			t5 = claim_text(strong_nodes, " to join an existing classroom");
			strong_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Virtual Box";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 42, 0, 501);
			attr_dev(a, "href", "/join");
			add_location(a, file, 45, 48, 572);
			add_location(strong, file, 45, 3, 527);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 45, 0, 524);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, strong);
			append_dev(strong, t3);
			append_dev(strong, a);
			append_dev(a, t4);
			append_dev(strong, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
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
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ successkid });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWYzNjQ2ZDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL3N1Y2Nlc3NraWQuanBnIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC80NjU4OThjODMwYmI5ZDJjLmpwZ1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=